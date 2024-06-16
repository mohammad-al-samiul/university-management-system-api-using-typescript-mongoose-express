import { Schema, Types } from "mongoose";
import { FacultyModel, TFaculty, TFacultyUserName } from "./faculty.interface";

const userNameSchema = new Schema<TFacultyUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
});

const facultySchema = new Schema<TFaculty, FacultyModel>({
  id: {
    type: String,
    required: [true, "ID is required"],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is required"],
    ref: "User",
  },
  designation: {
    type: String,
    required: [true, "Designation is required"],
  },
  name: {
    type: userNameSchema,
    required: [true, "Name is requierd"],
  },
});
