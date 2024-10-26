"server-only";

import { handleApiRequest } from "./api-handler";

// API Functions using the wrapper
export async function getPersonas(token) {
  return handleApiRequest("GET", "/personas", { token });
}

export async function getPersonaById(id, token) {
  return handleApiRequest("GET", `/personas/${id}`, { token });
}

export async function createPersona(data, token) {
  return handleApiRequest("POST", "/personas", { body: data, token });
}

export async function editPersona(id, data, token) {
  return handleApiRequest("PUT", `/personas/${id}`, { body: data, token });
}

export async function deletePersona(id, token) {
  console.log("token", token);
  return handleApiRequest("DELETE", `/personas/${id}`, { token });
}

// Example usage
// async function handleCreatePersona(data, token) {
//   const { data: persona, error } = await createPersona(data, token);

//   if (error) {
//     // Handle error (e.g., show toast notification)
//     console.error("Failed to create persona:", error);
//     return;
//   }

//   // Success case
//   return persona;
// }
