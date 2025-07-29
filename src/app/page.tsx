"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">🧪 Test Page</h1>
      <p className="mb-6 text-lg">You clicked the button {count} times.</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}
