"use server";

import { generateAimeme } from "@/api/ai-response";
import { handleApiRequest } from "@/api/api-handler";
import { auth } from "@/app/(auth)/auth";
import { z } from "zod";

const post_schema = z.object({
  post: z.string().min(1),
});

export async function generateMeme(_, formData) {
  try {
    const session = await auth();
    if (!session || !session.accessToken) {
      return {
        status: "failed",
        error: "Not authenticated",
      };
    }

    const validatedData = post_schema.parse({ post: formData.get("post") });

    const { data, error } = await generateAimeme(
      validatedData,
      session.accessToken
    );
    console.log("Data", data);
    if (error) {
      console.error("API Error:", error);
      return {
        status: "failed",
        error: error,
      };
    }

    if (!data?.data?.url) {
      return {
        status: "failed",
        error: "No meme URL received",
      };
    }

    return {
      status: "success",
      data: {
        memeUrl: data.data.url,
        expiryDate: data.data.expiryDate,
      },
    };
  } catch (error) {
    console.error("Generation Error:", error);
    return {
      status: "failed",
      error: "Failed to generate meme",
    };
  }
}
