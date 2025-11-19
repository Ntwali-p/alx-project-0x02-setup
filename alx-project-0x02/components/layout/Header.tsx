import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-blue-600 text-white flex gap-6">
      <h1 className="text-2xl font-bold">ALX Next.js Project</h1>

      <nav className="flex gap-4 ml-auto">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
