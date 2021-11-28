import express, { Router } from "express";
import authRoute from "./auth.route";

import exerciseRoute from "./exercise.route";
import workoutRoute from "./workout.route";
const router:Router = express.Router();

router.use("/auth", authRoute);
router.use("/exercise", exerciseRoute);
router.use("/workout", workoutRoute);


export default router;