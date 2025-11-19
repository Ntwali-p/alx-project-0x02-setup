import React from "react";
import Header from "../components/layout/Header";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-4 text-lg">Welcome to the Home page!</p>
      </main>
    </div>
  );
};

export default HomePage;
