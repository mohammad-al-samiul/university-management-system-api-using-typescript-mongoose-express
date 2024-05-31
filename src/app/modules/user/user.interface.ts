import { Types } from "mongoose";

export type TUser = {
  id: string;
  user: Types.ObjectId;
  password: string;
  needsPasswordChange: boolean;
  role: "admin" | "faculty" | "student";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};
