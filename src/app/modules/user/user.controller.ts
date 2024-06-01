import { NextFunction, Request, Response } from "express";
import { UserValidation } from "./user.validation";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { student: studentData, password } = req.body;

  //const zodParseData = UserValidation.userValidationSchema.parse(userData);
  const result = await UserServices.createStudentIntoDB(studentData, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student created successfully",
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
