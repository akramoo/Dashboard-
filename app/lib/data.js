import { User } from "./modules/user.js";
import { connectToDB } from "./utils.js";

export const fatchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    throw new Error("Failed to fatch users !");
  }
};
