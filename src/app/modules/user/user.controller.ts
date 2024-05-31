import { Request, Response } from "express";
import { UserValidation } from "./user.validation";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData, password } = req.body;

    //const zodParseData = UserValidation.userValidationSchema.parse(userData);
    const result = await UserServices.createStudentIntoDB(
      studentData,
      password
    );
    res.status(201).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createStudent,
};
