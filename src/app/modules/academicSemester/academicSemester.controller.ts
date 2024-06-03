import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const semesterData = req.body;
  const result =
    await AcademicSemesterServices.createAcademicSemesterIntoDB(semesterData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Created Successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
