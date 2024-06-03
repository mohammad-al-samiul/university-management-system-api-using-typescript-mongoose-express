import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (payload: TStudent, password: string) => {
  //create a user object
  const userData: Partial<TUser> = {};
  //if password is not given, then set default pass
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = "student";
  //set user id

  //get semester
  const semesterData = await AcademicSemester.findById(
    payload.admissionSemester
  );

  if (semesterData) {
    userData.id = await generateStudentId(semesterData);
  }

  //create a user
  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
  }

  //create a student
  const newStudent = await Student.create(payload);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
