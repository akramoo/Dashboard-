import { User } from "@/app/lib/modules/user.js";
import { connectToDB } from "@/app/lib/utils.js";

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