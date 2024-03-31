import { User } from "./modules/user.js"
import { connectToDB } from "./utils.js"

export const fatchUsers = async () => {
    try {
        connectToDB()
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error("Failed to fatch users !")
    }
}