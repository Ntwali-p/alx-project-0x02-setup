import React from "react";
import Header from "../components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-4 text-lg">This is the About page of the project.</p>
      </main>
    </div>
  );
};

export default AboutPage;
