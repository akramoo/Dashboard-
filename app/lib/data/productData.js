import { Product } from "@/app/lib/modules/product.js";
import { connectToDB } from "@/app/lib/utils.js";

export const fatchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await Product.find().countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fatch Products !");
  }
};

export const fatchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return  product;
  } catch (error) {
    throw new Error("Failed to fatch Product !");
  }
};
