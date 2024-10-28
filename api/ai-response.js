"server-only";

import { handleApiRequest } from "./api-handler";

export const generateAimeme = async (data, token) => {
  console.log("Generating meme...", data);
  //   return { error: "Not implemented" };
  return handleApiRequest("POST", "/ai/generate-meme", { body: data, token });
};
