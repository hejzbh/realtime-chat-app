import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import { db } from "./lib/db";
import { comparePasswords } from "./features/auth/utils/passwords";
import { AuthOptions } from "next-auth";
import { routePaths } from "./data/routePaths";

export default {
  providers: [
    // GitHub OAuth provider configuration
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Custom credentials provider configuration
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // Check if credentials are provided
        if (!credentials?.email || !credentials.password)
          throw new Error("Invalid Credentials");

        // Fetch user by email
        const user = await db.user.findUnique({
          where: { email: credentials.email },
          include: { password: true },
        });

        if (!user) return null;

        // Validate user and password existence
        if (!user?.password) return null;

        // Verify provided password matches stored hash
        const isPasswordCorrect = await comparePasswords({
          plainTextPassword: credentials.password,
          hashedPassword: user.password.hash,
        });

        if (!isPasswordCorrect) return null;

        // Exclude password from returned user object
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),
  ],
  callbacks: {
    // Add custom data to JWT token
    jwt({ token, user, trigger, session }: any) {
      if (user) Object.assign(token, { id: user.id, role: user.role });
      if (trigger === "update" && session) token = { ...token, ...session };
      return token;
    },
    // Add custom data to session object
    session({ session, token }: any) {
      Object.assign(session.user, { id: token.id, role: token.role });
      return session;
    },
  },
  pages: { signIn: routePaths.SIGN_IN },
  session: { strategy: "jwt" },
} as AuthOptions;
