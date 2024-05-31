import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Passowrd must be a string",
    })
    .max(20, { message: "password can't be more than 20" })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
