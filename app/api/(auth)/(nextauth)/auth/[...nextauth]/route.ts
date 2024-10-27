import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/lib/db";
import { comparePasswords } from "@/features/auth/utils/passwords";

// Odraditi splitovane funkcije (folder structure), dodati notifikacije, komenate
// AuthOptions, model Session ide preko PrismaAdaptera, treba vidjeti da li moze drugacije.
// Pogledati na tulumovichazim18@ chat sa chatgptom.
// Nauciti next-auth, jwt, tokene itd...

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-Mail",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password)
          throw new Error("Invalid Credentials");

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
          include: {
            password: true,
          },
        });

        if (!user) throw new Error("User does not exists, invalid credentials");

        if (!user.password) throw new Error("ERROR: Cannot get password");

        const isPasswordCorrect = await comparePasswords({
          plainTextPassword: credentials.password,
          hashedPassword: user.password.hash,
        });

        if (!isPasswordCorrect) throw new Error("Your password is not correct");

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV !== "production",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
