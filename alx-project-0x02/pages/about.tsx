import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>

        <div className="space-x-4">
          <Button size="small" shape="rounded-sm">Small & Rounded-SM</Button>
          <Button size="medium" shape="rounded-md">Medium & Rounded-MD</Button>
          <Button size="large" shape="rounded-full">Large & Rounded-Full</Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
