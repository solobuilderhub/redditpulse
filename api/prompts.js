"server-only";

import { handleApiRequest } from "./api-handler";

// API Functions using the wrapper
export async function getPrompts(token) {
  return handleApiRequest("GET", "/prompt", { token });
}

export async function getPromptById(id, token) {
  return handleApiRequest("GET", `/prompt/${id}`, { token });
}

export async function createPrompt(data, token) {
  return handleApiRequest("POST", "/prompt", { body: data, token });
}

export async function editPrompt(id, data, token) {
  return handleApiRequest("PUT", `/prompt/${id}`, { body: data, token });
}

export async function deletePrompt(id, token) {
  console.log("token", token);
  return handleApiRequest("DELETE", `/prompt/${id}`, { token });
}
