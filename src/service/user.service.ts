import { User, UserDocument } from "../models/user";
import httpStatus from "http-status";
import ApiError from "../error/ApiError";

const createUser = async (user:UserDocument) => {
    // console.log("USER", user);
    const emailExists = await User.isEmailTaken(user.email);
    if (emailExists) throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    else {
        return await User.create(user);
    }
    // return user;

}
const userService = {
    createUser,

}
export default userService;