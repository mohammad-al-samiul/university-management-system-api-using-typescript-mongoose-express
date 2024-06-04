import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.routes";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semester",
    route: AcademicSemesterRoute,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
