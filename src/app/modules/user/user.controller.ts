import { NextFunction, Request, Response } from "express";
import { UserValidation } from "./user.validation";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { student: studentData, password } = req.body;

    //const zodParseData = UserValidation.userValidationSchema.parse(userData);
    const result = await UserServices.createStudentIntoDB(
      studentData,
      password
    );
    // res.status(201).json({
    //   success: true,
    //   message: "student created successfully",
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
