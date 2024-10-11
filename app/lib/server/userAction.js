"use server";

import { revalidatePath } from "next/cache";
import { User } from "@/app/lib/modules/user.js";
import { connectToDB } from "@/app/lib/utils.js";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user !");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user !");
  }

  revalidatePath("/dashboard/users");
};

export const UpdateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    let updateFiled = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFiled).forEach((key) => {
      if (updateFiled[key] === "" || updateFiled[key] === undefined) {
        delete updateFiled[key];
      }
    });

    if (updateFiled.password) {
      const salt = await bcrypt.genSalt(10);
      updateFiled.password = await bcrypt.hash(updateFiled.password, salt);
    }

    await User.findByIdAndUpdate(id, updateFiled);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user !");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
