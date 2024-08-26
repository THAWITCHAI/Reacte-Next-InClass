"use client";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const { data: session, status } = useSession();
  if (session) {
    return (
      <div className="bg-blue-500 w-full h-20 flex flex-row justify-around items-center">
        <div className="w-1/4 h-f  flex justify-start items-center ">
          <Link href={"/"}>
            <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
              หน้าหลัก
            </button>
          </Link>
        </div>
        <div className=" flex justify-between items-center w-1/6">
          {session.user.rname === "user" && (
            <Link href={"/data_car"}>
              <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
                เลือกสินค้า
              </button>
            </Link>
          )}
          {session.user.rname === "admin" && (
            <Link href={"/data_car"}>
              <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
                ข้อมูลสินค้า
              </button>
            </Link>
          )}
          <Link href={"/profile"}>
            <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
              ข้อมูลส่วนตัว
            </button>
          </Link>
        </div>
        <div className="w-1/4 h-f  flex justify-end items-center ">
          {!session && (
            <Link href={"/api/auth/signin"}>
              <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
                เข้าสู่ระบบ
              </button>
            </Link>
          )}
          {session && (
            <Link href={"/api/auth/signout"}>
              <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
                ออกจากระบบ
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
  if (!session) {
    return (
      <div className="bg-blue-500 w-full h-20 flex flex-row justify-around items-center">
        <div className="w-1/4 h-f  flex justify-start items-center ">
          <Link href={"/"}>
            <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
              หน้าหลัก
            </button>
          </Link>
        </div>
        <div className=" flex justify-between items-center w-1/6"></div>
        <div className="w-1/4 h-f  flex justify-end items-center ">
          {!session && (
            <Link href={"/api/auth/signin"}>
              <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
                เข้าสู่ระบบ
              </button>
            </Link>
          )}
          {session && (
            <Link href={"/api/auth/signout"}>
              <button className="text-white  w-24 h-12 rounded-md hover:ring-gray-300 ring-1 transition-all active:scale-95">
                ออกจากระบบ
              </button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
