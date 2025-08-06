'use client';

import { useEffect, useRef } from 'react';

export default function HomePage() {
  const paperformId = 'guardians-digital-ambassador-onboarding-form'; // ✅ Correct form
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Paperform embed script manually after mount
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = `<div data-paperform-id="${paperformId}"></div>`;

      const script = document.createElement('script');
      script.src = 'https://paperform.co/__embed.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-gray-300">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Ambassador Onboarding</h1>
        <p className="text-center text-gray-500 mb-6">Please fill out the form below to join the program.</p>
        <div ref={formContainerRef}></div>
      </div>
    </main>
  );
}
