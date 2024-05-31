import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20, { message: "password can't be more than 20" }),
  needPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["admin", "faculty", "student"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDeleted: z.boolean().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
