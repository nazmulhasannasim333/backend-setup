import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(`Server Running on port ${config.port}`);
});
export default app;
