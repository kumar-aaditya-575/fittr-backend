import express, { NextFunction, Router, Request, Response } from "express";

const router:Router = express.Router();

router.get("/", (req:Request,res:Response ,next:NextFunction) => {
    console.log("Google Login for Fittr");
    res.send( "Google Login for Fittr");
});

export default router;

