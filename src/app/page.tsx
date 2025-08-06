'use client';

import { useEffect, useRef } from 'react';

export default function OnboardingPage() {
  const formId = 'guardians-digital-ambassador-onboarding-form';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Insert the target div for Paperform
      containerRef.current.innerHTML = `<div data-paperform-id="${formId}"></div>`;

      // Append the embed script
      const script = document.createElement('script');
      script.src = 'https://paperform.co/__embed.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-3xl border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-4">Ambassador Onboarding Form</h1>
        <p className="text-center text-gray-500 mb-6">
          Please fill out the onboarding form below to join the Guardians Digital Ambassador Program.
        </p>
        <div ref={containerRef} />
      </div>
    </main>
  );
}


