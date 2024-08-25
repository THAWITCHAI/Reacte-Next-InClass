import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/option";
import Link from "next/link";

type Props = any;

export default async function Navbar({}: Props) {
  const session = await getServerSession(options);
  return (
    <div className="flex flex-row justify-center items-start mx-auto  h-16 w-full shadow-md">
      <div className="hover:ring-1 hover:ring-blue-400 text-blue-600 rounded-md py-2 px-3 m-2 text-center">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="hover:ring-1 hover:ring-blue-400 text-blue-600 rounded-md py-2 px-3 m-2 text-center">
        <Link href={"/profile"}>Profile</Link>
      </div>
      <div className="hover:ring-1 hover:ring-blue-400 text-blue-600 rounded-md py-2 px-3 m-2 text-center">
        <Link href={"/downloads"}>Downloads</Link>
      </div>
      {session && (
        <div className="hover:ring-1 hover:ring-blue-400 text-blue-600 rounded-md py-2 px-3 m-2 text-center">
          <Link href={"/api/auth/signout"}>SignOut</Link>
        </div>
      )}
      {!session && (
        <div className="hover:ring-1 hover:ring-blue-400 text-blue-600 rounded-md py-2 px-3 m-2 text-center">
          <Link href={"/api/auth/signin"}>SignIn</Link>
        </div>
      )}
    </div>
  );
}
