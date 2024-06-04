import mongoose, { Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { nextTick } from "process";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: [true, "Academic Faculty is required"],
    },
  },
  {
    timestamps: true,
  }
);

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
    throw new Error("Department doesn't exist!");
  }
  next();
});

export const AcademicDepartment = mongoose.model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
