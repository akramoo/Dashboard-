"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/app/lib/utils.js";
import { redirect } from "next/navigation";
import { Product } from "@/app/lib/modules/product.js";

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user !");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user !");
  }

  revalidatePath("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    let updateFiled = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFiled).forEach((key) => {
      if (updateFiled[key] === "" || updateFiled[key] === undefined) {
        delete updateFiled[key];
      }
    });

    await Product.findByIdAndUpdate(id, updateFiled);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add product !");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
