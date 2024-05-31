import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const errorHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api not found!",
    error: "",
  });
};

export default errorHandler;
