"use client";
import { ThemeToggle } from "@/app/theme-toggle";
import React from "react";

const Navbar = () => {
  return (
    // <nav className="p-2 px-4">
    //   <ul className="flex items-center justify-between">
    //     <li>home</li>
    //     <ThemeToggle />
    //   </ul>
    // </nav>
    <nav className="sticky p-2 top-0 z-10 bg-primary/20 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-input">
      <div className="flex items-center justify-between h-10">
        <span className="text-2xl font-semibold">Logo</span>
        <div className="flex space-x-4 items-center">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
