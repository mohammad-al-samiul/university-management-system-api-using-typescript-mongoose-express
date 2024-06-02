import mongoose, { Schema } from "mongoose";
import {
  TAcademicSemester,
  TAcademicSemesterName,
  TAcademicSemeterCode,
  TMonths,
} from "./academicSemester.interface";

const Months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Spring",
  "Fall",
];

const AcademicSemesterCode: TAcademicSemeterCode[] = ["01", "02", "03"];

const academicSemesterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    year: {
      type: Date,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemeter = mongoose.model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
