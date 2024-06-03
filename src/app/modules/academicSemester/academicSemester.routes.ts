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

router.get(
  "/all-academic-semester",
  AcademicSemesterControllers.getAllAcademicSemester
);

router.get(
  "/single-academic-semester/:id",
  AcademicSemesterControllers.getSingleAcademicSemester
);

router.patch(
  "/update-academic-semester/:id",
  AcademicSemesterControllers.updateAcademicSemester
);

export const AcademicSemesterRoute = router;
