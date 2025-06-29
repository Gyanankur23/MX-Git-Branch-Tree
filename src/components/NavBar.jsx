import React from "react";
import logo from "../assets/react.svg";

export default function NavBar({ darkMode, toggleDark }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>
          <span className="text-xl font-semibold">MX Git-Branch Tree</span>
        </div>
        <button
          onClick={toggleDark}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
