import { Product } from "./modules/product.js";
import { User } from "./modules/user.js";
import { connectToDB } from "./utils.js";

export const fatchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await User.find().count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    throw new Error("Failed to fatch users !");
  }
};

export const fatchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return  user;
  } catch (error) {
    throw new Error("Failed to fatch user !");
  }
};


export const fatchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await Product.find().count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    
    return { count, products };
  } catch (error) {
    throw new Error("Failed to fatch Product !");
  }
};

export const fatchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return  product;
  } catch (error) {
    throw new Error("Failed to fatch product !");
  }
};
