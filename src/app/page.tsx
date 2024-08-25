import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/option";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options);
  if (session && session.user) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto h-screen w-full">
        <div className="text-gray-500 text-3xl">Home Page</div>
      </div>
    );
  }
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto h-screen w-full">
        <div className="text-blue-500 text-3xl">
          <Link href={"/api/auth/signin"}>เข้าสู่ระบบ</Link>
        </div>
      </div>
    );
  }
}
