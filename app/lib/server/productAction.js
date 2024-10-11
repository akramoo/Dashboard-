"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { Product } from "./modules/product";

export const addProduct = async (formData) => {
    const {title, desc, price, stock, color, size} = Object.fromEntries(formData);

    try{

        connectToDB();
        const newProduct = new Product({
            title, 
            desc, 
            price, 
            stock, 
            color, 
            size
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

    try{

        connectToDB();
        await Product.findByIdAndDelete(id);

    } catch (error) {
        console.log(error);
        throw new Error("Failed to add user !");
    }

    revalidatePath("/dashboard/products");
};