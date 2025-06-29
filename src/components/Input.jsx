import React from "react";

export default function Input(props) {
  return (
    <input
      {...props}
      className="flex-grow border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
    />
  );
}
