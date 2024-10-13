"use server";

import { signIn, signOut } from "@/app/auth";

export const logIn = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    console.log("Signing in with credentials");
    console.log("username", username);
    console.log("password", password);

    await signIn("credentials", formData);

    console.log("Signed in with credentials");
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      console.log("Wrong Credentials");
      return "Wrong Credentials";
    }
    throw err;
  }
};


export const logOut = async () => {
  try {
    await signOut({ redirect: false });
    console.log("Successfully signed out.");
  } catch (error) {
    console.error("Error during sign out:", error);
    return "Failed to sign out. Please try again.";
  }
};