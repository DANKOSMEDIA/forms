'use client';

import { useEffect } from 'react';

export default function HomePage() {
  const paperformId = 'guardians-digital-ambassador-onboarding-form'; // <- Ambassador Onboarding Form

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://paperform.co/__embed.min.js"]');
    if (!existingScript) {
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
        <p className="text-center text-gray-500 mb-6">Help us get to know you. Fill out the onboarding form below.</p>
        <div data-paperform-id={paperformId}></div>
      </div>
    </main>
  );
}
