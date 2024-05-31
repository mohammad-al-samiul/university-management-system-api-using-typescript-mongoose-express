import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import errorHandler from "./app/middlewares/errorHandler";
import router from "./app/routes";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//global error handler
app.use(globalErrorHandler);

//not found error handler
app.use(errorHandler);
export default app;
