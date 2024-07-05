import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./app/config";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFount from "./app/middlewares/notFound";
const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send(`Server Running on port ${config.port}`);
});

// global error handler middleware
app.use(globalErrorHandler);

// not found middleware
app.use(notFount);

export default app;
