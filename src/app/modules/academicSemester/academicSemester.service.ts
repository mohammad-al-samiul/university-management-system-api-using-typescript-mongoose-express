import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemeter } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemeter.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
