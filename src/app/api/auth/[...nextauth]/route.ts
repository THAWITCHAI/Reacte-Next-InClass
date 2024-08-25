import NextAuth from "next-auth";
import { options } from "./option";

const handle = NextAuth(options);
export { handle as GET, handle as POST };
