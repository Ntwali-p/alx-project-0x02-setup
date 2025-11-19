import React from "react";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-semibold">Welcome to ALX Project 0x02</h2>
        <p className="mt-4 text-lg">
          This is your starting point for learning Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
};

export default Home;
