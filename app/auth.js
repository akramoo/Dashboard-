import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { authConfig } from "./app/authconfig";
import { connectToDB } from "@/app/lib/utils.js";
import { User } from "@/app/lib/modules/user.js";
import bcrypt from "bcrypt";


const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });

        if (!user) throw new Error("No user found");

        const isPasswordMatch = await bcrypt.compare(
            credentials.password,
            user.password
        );

        if (!isPasswordMatch) throw new Error("Invalid password");

        return user;
    } catch (error) {
        throw new Error("Failed to login");
    }
}

export const {signIn, signOut, auth} = NextAuth({
    ...authConfig,
    providers: [
        CredentialProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ],
})