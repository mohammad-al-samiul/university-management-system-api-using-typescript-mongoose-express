import config from "../../config";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (studentData: TUser, password: string) => {
  //create a user object
  const userData: Partial<TUser> = {};
  //if password is not given, then set default pass
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = "student";
  //set user id manually
  userData.id = "1903710201996";

  //create a user
  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }

  //create a student
  const newStudent = await Student.create(studentData);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
