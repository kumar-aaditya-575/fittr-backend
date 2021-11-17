// import express from "express";
import { Application, Request, Response, NextFunction } from "express";
import  express from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello world");
});

app.listen(3000, () => console.log("server running"));
