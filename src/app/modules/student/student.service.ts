import mongoose from "mongoose";
import { Student } from "./student.model";
import { AppError } from "../academicDepartment/academicDepartment.model";
import httpStatus from "http-status";
import { User } from "../user/user.model";

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ _id: id })
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  //id = user or student roll or ID , not mongoose _id
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deleteStudentData = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
    if (!deleteStudentData) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to deleted student");
    }

    const deleteUserData = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );
    if (!deleteUserData) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user!");
    }
    await session.commitTransaction();
    await session.endSession();

    return deleteStudentData;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
