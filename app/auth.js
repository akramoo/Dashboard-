import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from "@/app/auth.config";
import { connectToDB } from "@/app/lib/utils.js";
import { User } from "@/app/lib/modules/user.js";
import bcrypt from "bcrypt";


const login = async (credentials) => {
    try {
        connectToDB();

        const user = await User.findOne({ username: credentials.username });

        if (!user || !user.isAdmin) throw new Error("No user found");

        console.log(`\n\n User ${user} \n\n`);
        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if (!isPasswordCorrect) throw new Error("Invalid password");

        console.log(`\n\n User ${user.username} logged in \n\n`);
        return user;
    } catch (error) {
        throw new Error("Failed to login");
    }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log(err);
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});