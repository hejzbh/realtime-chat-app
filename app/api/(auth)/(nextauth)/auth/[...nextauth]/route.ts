import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import authConfig from "@/features/auth/auth.config";
import { db } from "@/lib/db";

const handler = NextAuth({ adapter: PrismaAdapter(db), ...authConfig });

export { handler as GET, handler as POST };
