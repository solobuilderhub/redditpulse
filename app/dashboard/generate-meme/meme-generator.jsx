"use client";
import Form from "next/form";
import { useState, useEffect } from "react";
import { useActionState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateMeme } from "./action";
import { SubmitButton } from "@/components/custom/submit-button";

export default function MemeGenerator() {
  const [post, setPost] = useState("");
  const [meme, setMeme] = useState(null);

  const [state, formAction] = useActionState(generateMeme, {
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    if (state.status === "success" && state.data) {
      setMeme({ url: state.data.memeUrl, expiryDate: state.data.expiryDate });
      toast.success("Meme generated successfully!");
    } else if (state.status === "error") {
      toast.error(state.error || "Failed to generate meme");
    }
  }, [state.status, state.data, state.error]);

  const handleSubmit = (formData) => {
    setPost(formData.get("post"));
    formAction(formData);
  };

  const handleReset = () => {
    setPost("");
    setMeme(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="mx-auto">AI Meme Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          action={handleSubmit}
          className="flex flex-col gap-4 px-4 sm:px-16"
        >
          <Textarea
            name="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Enter your post content here..."
            className="w-full"
            required
          />
          <SubmitButton>Generate Meme</SubmitButton>
        </Form>
        {meme && (
          <div className="mt-4 space-y-2">
            <Image
              src={meme.url}
              alt="Generated Meme"
              width={400}
              height={400}
              className="w-full h-auto rounded-md"
            />
            <p className="text-sm text-muted-foreground">
              Expires on: {new Date(meme.expiryDate).toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={handleReset} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Generate New Meme
        </Button>
      </CardFooter>
    </Card>
  );
}
