"use client";
import { useSession } from "next-auth/react";
import Navbar from "./_components/Navbar";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    return (
      <div className="h-screen w-screen">
        <Navbar />
        <div className=" h-5/6 w-full">
          <h1 className="text-3xl flex justify-center items-center h-full w-full text-blue-500 font-mono">
            Home Page
          </h1>
        </div>
      </div>
    );
  }
  if (status === "authenticated") {
    return (
      <div className="h-screen w-screen">
        <Navbar />
        <div className=" h-5/6 w-full">
          <h1 className="text-3xl flex justify-center items-center h-full w-full text-blue-500 font-mono">
            Welcome, {session.user.uname}
            <br />
            You is {session.user.rname}
          </h1>
        </div>
      </div>
    );
  }
  if (status === "loading") {
    return (
      <div className="h-screen w-screen">
        <Navbar />
        <div className=" h-5/6 w-full">
          <h1 className="text-3xl flex justify-center items-center h-full w-full text-blue-500 font-mono">
            กำลังดาวน์โหลด...
          </h1>
        </div>
      </div>
    );
  }
}
