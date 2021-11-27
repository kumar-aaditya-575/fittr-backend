import express, { NextFunction, Router, Request, Response } from "express";
// import exerciseController from "../../controller";
import fetchAllExercise from "../../controller/exerciseController";

const router: Router = express.Router();

router.get("/all", fetchAllExercise);

export default router;

