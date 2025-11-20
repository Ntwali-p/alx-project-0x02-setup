import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{content}</p>
      {userId !== undefined && (
        <p className="mt-2 text-sm text-gray-500">User ID: {userId}</p>
      )}
    </div>
  );
};

export default PostCard;
