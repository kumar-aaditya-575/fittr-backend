import express, { NextFunction, Router, Request, Response } from "express";
import ApiError from "../error/ApiError";
import { generateAuthTokens } from "../service/token.service";
import userService from "../service/user.service";

const login = async (req:Request, res: Response) =>{
    // let email = req.body.email; let pw = req.body.password;
    // let user = await authService.loginUserWithEmailAndPassword(email, pw);

    // let token = await generateAuthTokens(user._id);
    // res.status(200).send({ user, tokens: token });

    res.status(200).send("under construction");


}
const register = async (req:Request, res:Response) => {
    try{
        const user = await userService.createUser(req.body);
        const token = await generateAuthTokens(user);
        res.status(200).send({ user, tokens: token });
    }
    catch(error){
        res.status(400).send(error);
    }

}




const authController = {
    login,
    register
};

export default authController;



