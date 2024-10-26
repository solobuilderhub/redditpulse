"use server";
import { auth } from "@/app/(auth)/auth";
import { createPersona, deletePersona, editPersona } from "@/api/personas";
import { revalidatePath } from "next/cache";

export const personaAction = async (values, action, id = null) => {
  const session = await auth();
  const { job, industry, niche, experience, expertise } = values;
  const data = {
    job,
    industry,
    niche,
    experience,
    expertise,
  };

  let response;
  if (action === "create") {
    response = await createPersona(data, session.accessToken);

    if (response?.error) {
      return { error: "Failed to add store" };
    }
    revalidatePath("/dashboard/personas"); // create new persona
    return { success: "Persona added successfully" };
  }

  if (action === "edit") {
    response = await editPersona(id, data, session.accessToken);
    if (response.error) {
      return { error: "Failed to update store" };
    }
    revalidatePath("/dashboard/personas"); // update persona
    return { success: "Persona updated successfully" };
  }

  if (action === "delete") {
    response = await deletePersona(id, session.accessToken);
    if (response.error) {
      return { error: "Failed to delete store" };
    }
    revalidatePath("/dashboard/personas"); // delete persona
    return { success: "Persona deleted successfully" };
  }

  return { error: "Invalid action" };
};
