import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const departmentData = req.body;
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(
      departmentData
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Department Created Successfully!",
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Department Retrieved Successfully!",
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Department Retrieved Successfully!",
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const departmentData = req.body;
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
      id,
      departmentData
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Department Update Successfully!",
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
