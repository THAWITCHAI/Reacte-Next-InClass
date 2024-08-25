"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function DownloadsPage({}: Props) {
  const { data, status } = useSession();
  if (status === "loading") {
    return (
      <div
        className="flex flex-col justify-center items-center mx-auto h-screen my-5
      w-full"
      >
        <div className="text-3xl text-blue-500 ">Loading...</div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col justify-center items-center mx-auto h-screen my-5">
        <div className="text-3xl">Error 404 </div>
      </div>
    );
  }
  if (status === "authenticated") {
    const downloadList = [
      {
        title: "Javascript",
        link: "",
      },
      {
        title: "TypeScript",
        link: "",
      },
      {
        title: "Java",
        link: "",
      },
      {
        title: "Python",
        link: "",
      },
    ];
    return (
      <div className="flex flex-col justify-start items-start w-2/6 mx-auto my-5">
        <div>รายการดาวน์สำหรับ {data.user?.name}</div>
        <div className="flex flex-col justify-start items-start w-1/6 mx-auto h-screen my-5">
          {downloadList.map((item, index) => {
            return (
              <Link key={index} href={item["link"]}>
                {item["title"]}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
