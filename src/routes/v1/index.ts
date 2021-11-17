import express, { Router } from "express";
import loginRoute from "./login.route";

const router:Router = express.Router();

router.use("/login", loginRoute);

export default router;