// import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import  express from "express";
const app: Application = express();
import routes from "./routes/v1";
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello world");
// });

app.use("/v1", routes);

export default app;


