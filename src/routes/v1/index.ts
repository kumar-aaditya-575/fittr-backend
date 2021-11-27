import express, { Router } from "express";
import loginRoute from "./login.route";
import exerciseRoute from "./exercise.route";
import workoutRoute from "./workout.route";
const router:Router = express.Router();

router.use("/login", loginRoute);
router.use("/exercise", exerciseRoute);
router.use("/workout", workoutRoute);
export default router;