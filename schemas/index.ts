// backend validation for form
import * as z from "zod";
import { useForm } from "react-hook-form";

const passwordRegex = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])+(?=.*[0-9])+.*$/;

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
export const SignUpSchema = z.object({
  email: z.string().email({
    message: "YOU GO TO CARLETON",
  }),
  password: z
    .string()
    .regex(passwordRegex, {
      message:
        "Password must contain special characters and be at least 8 characters also you go to carleton.",
    })
    .min(8),
});
