import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-4">
      <div className="container mx-auto px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MX Git-Branch Tree. All rights reserved.
      </div>
    </footer>
  );
}
