import express from "express";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicDepartmentValidations } from "./academicDepartment.validation";
const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidations.createAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.createAcademicDepartment
);

router.get(
  "/all-academic-department",
  AcademicDepartmentControllers.getAllAcademicDepartment
);

router.get(
  "/single-academic-department/:id",
  AcademicDepartmentControllers.getSingleAcademicDepartment
);

router.patch(
  "/update-academic-department/:id",
  validateRequest(
    AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
