'use client';

import { useEffect } from 'react';

export default function HomePage() {
  const paperformId = 'guardians-digital-new-client'; // change this to the other form ID if needed

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
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Client Intake Form</h1>
        <p className="text-center text-gray-500 mb-6">Please complete the form below to get started.</p>
        <div data-paperform-id={paperformId}></div>
      </div>
    </main>
  );
}
