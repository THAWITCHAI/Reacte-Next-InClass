"use client";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
