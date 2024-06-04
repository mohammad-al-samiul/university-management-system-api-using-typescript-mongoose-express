import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyValidations } from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get(
  "/all-academic-faculty",
  AcademicFacultyControllers.getAllAcademicFaculty
);

router.get(
  "/single-academic-faculty/:id",
  AcademicFacultyControllers.getSingleAcademicFaculty
);

router.patch(
  "/update-academic-faculty",
  validateRequest(
    AcademicFacultyValidations.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
