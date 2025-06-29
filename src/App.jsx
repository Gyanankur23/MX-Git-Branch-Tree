import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen text-gray-900 dark:text-gray-100">
      <NavBar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main className="flex-grow container mx-auto p-4">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
