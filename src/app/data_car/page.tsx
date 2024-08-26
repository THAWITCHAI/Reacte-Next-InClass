"use client";
import { useSession } from "next-auth/react";
import Navbar from "../_components/Navbar";
import { useRouter } from "next/navigation";

export default function Data_Car() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status == "authenticated") {
    return (
      <div className="h-screen w-screen">
        <Navbar />
        <div className=" h-5/6 w-full">
          <h1 className="text-3xl flex justify-center items-center h-full w-full text-blue-500 font-mono">
            Data Car
          </h1>
        </div>
      </div>
    );
  }
  if (status == "loading") {
    return (
      <div className="h-screen w-screen">
        <Navbar />
        <div className=" h-5/6 w-full">
          <h1 className="text-3xl flex justify-center items-center h-full w-full text-blue-500 font-mono">
            Downloading...
          </h1>
        </div>
      </div>
    );
  }
  if (status == "unauthenticated") {
    return router.replace("/");
  }
}
