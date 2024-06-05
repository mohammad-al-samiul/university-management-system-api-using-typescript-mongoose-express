import mongoose, { Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { nextTick } from "process";
import { number } from "zod";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: [true, "Academic Faculty is required"],
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

// class AppError extends Error {
//   public statusCode: number;

//   constructor(statusCode: number, message: string, stack = "") {
//     super(message);
//     this.statusCode = statusCode;
//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

export class AppError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

academicDepartmentSchema.pre("save", async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new Error("Department Already Exist!");
  }
  next();
});

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);
  if (!isDepartmentExist) {
    throw new AppError(404, "Department doesn't exist!");
  }
  next();
});

export const AcademicDepartment = mongoose.model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
