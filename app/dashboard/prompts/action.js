"use server";
import { createPrompt, deletePrompt, editPrompt } from "@/api/prompts";
import { auth } from "@/app/(auth)/auth";
import { revalidatePath } from "next/cache";

export const promptAction = async (values, action, id = null) => {
  const session = await auth();
  const { name, text } = values;
  const data = { name, text };

  let response;
  if (action === "create") {
    response = await createPrompt(data, session.accessToken);

    if (response?.error) {
      return { error: "Failed to add prompt" };
    }
    revalidatePath("/dashboard/prompts"); // create new persona
    return { success: "Prompt added successfully" };
  }

  if (action === "edit") {
    response = await editPrompt(id, data, session.accessToken);
    if (response.error) {
      return { error: "Failed to update store" };
    }
    revalidatePath("/dashboard/prompts"); // update persona
    return { success: "Prompt updated successfully" };
  }

  if (action === "delete") {
    response = await deletePrompt(id, session.accessToken);
    if (response.error) {
      return { error: "Failed to delete prompt" };
    }
    revalidatePath("/dashboard/prompts"); // delete persona
    return { success: "Persona deleted successfully" };
  }

  return { error: "Invalid action" };
};
