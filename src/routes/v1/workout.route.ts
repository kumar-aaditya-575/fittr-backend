import express, { NextFunction, Router, Request, Response } from "express";
// import exerciseController from "../../controller";
import { fetchAllExercises, fetchAllWorkouts } from "../../controller/exerciseController";

const router: Router = express.Router();

router.get("/all", fetchAllWorkouts);



export default router;

