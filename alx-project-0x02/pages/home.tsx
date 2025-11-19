import React from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">

        <h1 className="text-3xl font-bold mb-6">Home Page</h1>

        <Card
          title="Welcome to the Project"
          content="This project demonstrates Next.js routing and reusable components."
        />

        <Card
          title="Dynamic Components"
          content="The Card component accepts props to render different content."
        />

        <Card
          title="Next Steps"
          content="Continue building more components as you progress through the tasks."
        />

      </main>
    </div>
  );
};

export default HomePage;
