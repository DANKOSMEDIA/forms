'use client';

import { useState } from 'react';

type Form = {
  title: string;
  url: string;
};

const forms: Form[] = [
  {
    title: 'Client Intake Form',
    url: 'https://guardians-digital-new-client.paperform.co',
  },
  {
    title: 'Ambassador Onboarding Form',
    url: 'https://guardians-digital-ambassador-onboarding-form.paperform.co',
  },
];

export default function HomePage() {
  const [activeForm, setActiveForm] = useState(forms[0]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl border border-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Client Forms</h1>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {forms.map((form) => (
            <button
              key={form.title}
              onClick={() => setActiveForm(form)}
              className={`px-4 py-2 rounded-full border transition ${
                form.title === activeForm.title
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
              }`}
            >
              {form.title}
            </button>
          ))}
        </div>

        {/* Form iframe */}
        <div className="rounded-xl overflow-hidden border">
          <iframe
            src={activeForm.url}
            title={activeForm.title}
            className="w-full"
            style={{ height: '850px', border: 'none' }}
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>
      </div>
    </main>
  );
}
