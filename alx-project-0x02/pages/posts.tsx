import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;

// Static generation
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const posts: PostProps[] = data.map((p: any) => ({
      title: p.title,
      content: p.body,
      userId: p.userId,
    }));

    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Failed to fetch posts", error);
    return { props: { posts: [] } };
  }
}
