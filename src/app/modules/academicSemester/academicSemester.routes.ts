import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { academicSemesterValidations } from "./academicSemeter.validation";
import { AcademicSemesterControllers } from "./academicSemester.controller";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    academicSemesterValidations.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterControllers.createAcademicSemester
);

export const AcademicSemesterRoute = router;
