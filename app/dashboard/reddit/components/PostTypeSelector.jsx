"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostTypeSelector = ({ postType, onPostTypeChange }) => {
  return (
    <Select value={postType} onValueChange={onPostTypeChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select post type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="hot">Hot</SelectItem>
        <SelectItem value="new">New</SelectItem>
        <SelectItem value="top">Top</SelectItem>
        <SelectItem value="rising">Rising</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PostTypeSelector;
