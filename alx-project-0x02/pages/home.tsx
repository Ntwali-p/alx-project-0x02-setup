import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Create Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="mt-6 space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
