import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const academicFacultyData = req.body;
  const result =
    await AcademicFacultyServices.createAcademicFacultyIntoDB(
      academicFacultyData
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty Created Successfully!",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Academic Faculty retrieved Successfully!",
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Get Single Academic Faculty Retrieved Successfylly!",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const academicFacultyData = req.body;
  const { id } = req.params;

  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
    id,
    academicFacultyData
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty Updated Successfully!",
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
