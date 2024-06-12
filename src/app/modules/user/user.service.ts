import mongoose from "mongoose";
import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import { AppError } from "../academicDepartment/academicDepartment.model";
import httpStatus from "http-status";

const createStudentIntoDB = async (payload: TStudent, password: string) => {
  //create a user object
  const userData: Partial<TUser> = {};
  //if password is not given, then set default pass
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = "student";
  //get semester
  const semesterData = await AcademicSemester.findOne({
    _id: payload.admissionSemester,
  });
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set user id
    if (semesterData) {
      userData.id = await generateStudentId(semesterData);
    }

    //create a user
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to created user!");
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    //create a student
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student!");
    }
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserServices = {
  createStudentIntoDB,
};
