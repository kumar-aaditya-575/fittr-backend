import express, { Router } from "express";
import loginRoute from "./login.route";
import exerciseRoute from "./exercise.route";
const router:Router = express.Router();

router.use("/login", loginRoute);
router.use("/exercise", exerciseRoute);

export default router;