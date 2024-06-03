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

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrieved All Semester Successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrieved Single Semester Successfully",
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const semesterData = req.body;
  const { id } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    id,
    semesterData
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester updated successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
