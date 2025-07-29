"use client";
import { useState } from "react";

const paperforms = [
  {
    title: "Ambassador Onboarding Form",
    url: "https://guardians-digital-ambassador-onboarding-form.paperform.co",
  },
  {
    title: "New Client Questionnaire",
    url: "https://guardians-digital-new-client.paperform.co",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const current = paperforms[index];

  const next = () => setIndex((index + 1) % paperforms.length);
  const prev = () => setIndex((index - 1 + paperforms.length) % paperforms.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">{current.title}</h1>

      <iframe
        src={current.url}
        title={current.title}
        width="100%"
        height="800"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "1000px",
        }}
        allowFullScreen
      ></iframe>

      <div className="flex gap-4 mt-6">
        <button
          onClick={prev}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={next}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
