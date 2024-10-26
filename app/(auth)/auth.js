import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {},
      async authorize({ email, password }) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!response.ok) {
            console.log(response);
            console.error("Failed to fetch user:", response.statusText);
            return null;
          }

          const { user, token, refreshToken } = await response.json();
          // console.log("User new", user);

          if (!user) {
            throw new Error("User not found.");
          }

          return { user, token, refreshToken };
        } catch (error) {
          console.error("Error during user authorization:", error);
          throw new Error("Internal server error.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.user.id;
        token.email = user.user.email;
        token.name = user.user.name;
        token.accessToken = user.token;
      }
      // console.log(token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.name = token.name;
        session.accessToken = token.accessToken;
      }
      // console.log(session);
      return session;
    },
  },
});
