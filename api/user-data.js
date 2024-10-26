"server-only";

import { handleApiRequest } from "./api-handler";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const forgetPassApi = async (data) => {
  return handleApiRequest("POST", "/auth/forgot-password", {
    body: data,
  });
};

export const resetPassApi = async (data) => {
  return handleApiRequest("POST", "/auth/reset-password", {
    body: data,
  });
};

export const getUser = async (email) => {
  const endpoint = "/auth/getUser";
  // post request witd data = { email }
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    console.error("Failed to fetch user:", response.statusText);
    return null;
  }

  if (response.error && response.status === 404) {
    console.log("User not found");
    return null;
  }

  return await response.json();
};

export async function createUser(name, email, password) {
  const endpoint = "/auth/register";

  // make post request with data = { name, email, password }
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      console.error("Failed to create user:", response.statusText);
      return null;
    }

    if (response.status === 201) {
      return true;
    }
    return null;
  } catch (error) {
    console.error("Error during user creation:", error);
    throw error;
  }
}
