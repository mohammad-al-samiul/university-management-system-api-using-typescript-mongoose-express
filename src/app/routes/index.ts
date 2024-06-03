import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRoute } from "../modules/academicSemester/academicSemester.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
