import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>Here you will display posts in the future.</p>
      </main>
    </div>
  );
};

export default PostsPage;
