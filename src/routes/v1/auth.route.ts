import express, { NextFunction, Router, Request, Response } from "express";
import {register, login} from "../../validation/auth"
import {createValidator} from 'express-joi-validation'
import authController from "../../controller/authController"



const router: Router = express.Router();
router.post("/register",  authController.register);
router.post("/login", authController.login);
export default router;
