"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Profile({}: Props) {
  const { data, status } = useSession();
  const router = useRouter()
  if (status === "authenticated") {
    return (
      <div className="text-gray-500 flex justify-center items-center text-3xl w-full h-screen">
        Hellow Mr. {data.user?.name}
      </div>
    );
  }
  if (status === "loading") {
    return (
      <div className="text-gray-500 flex justify-center items-center text-3xl w-full h-screen">
        Loading...
      </div>
    );
  }
  if (status === "unauthenticated") {
    return router.replace('/')
  }
}
