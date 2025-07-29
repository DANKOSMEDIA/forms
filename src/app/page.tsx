"use client";
import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    PaperformEmbed?: {
      refresh: () => void;
    };
  }
}


const paperforms = [
  {
    title: "Ambassador Onboarding Form",
    id: "guardians-digital-ambassador-onboarding-form",
  },
  {
    title: "New Client Questionnaire",
    id: "guardians-digital-new-client",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const loadPaperformScript = () => {
    const scriptId = "paperform-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://paperform.co/__embed.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.PaperformEmbed) {
      window.PaperformEmbed.refresh();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = `<div data-paperform-id="${paperforms[index].id}"></div>`;
      loadPaperformScript();
    }
  }, [index]);

  const next = () => setIndex((index + 1) % paperforms.length);
  const prev = () => setIndex((index - 1 + paperforms.length) % paperforms.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">{paperforms[index].title}</h1>

      <div
        ref={containerRef}
        className="w-full max-w-4xl min-h-[700px] border shadow-lg rounded-xl overflow-hidden"
      />

      <div className="flex gap-4 mt-6">
        <button onClick={prev} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          ⬅️ Prev
        </button>
        <button onClick={next} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Next ➡️
        </button>
      </div>
    </div>
  );
}