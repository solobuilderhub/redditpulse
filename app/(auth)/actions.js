"use server";

import { z } from "zod";

import { createUser, getUser } from "@/api/user-data";

import { signIn } from "./auth";

const authLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const authRegisterSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

// export interface LoginActionState {
//   status: "idle" | "in_progress" | "success" | "failed" | "invalid_data";
// }

export const login = async (_, formData) => {
  try {
    const validatedData = authLoginSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });

    console.log("Logged in");

    return { status: "success" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: "invalid_data" };
    }

    return { status: "failed" };
  }
};

// export interface RegisterActionState {
//   status:
//     | "idle"
//     | "in_progress"
//     | "success"
//     | "failed"
//     | "user_exists"
//     | "invalid_data";
// }

export const register = async (_, formData) => {
  try {
    const validatedData = authRegisterSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    console.log("Validated data", validatedData);
    // return { status: "user_exists" };

    let user = await getUser(validatedData.email);

    if (user) {
      return { status: "user_exists" }; // as RegisterActionState
    } else {
      await createUser(
        validatedData.name,
        validatedData.email,
        validatedData.password
      );
      await signIn("credentials", {
        email: validatedData.email,
        password: validatedData.password,
        redirect: false,
      });

      return { status: "success" };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: "invalid_data" };
    }

    return { status: "failed" };
  }
};
