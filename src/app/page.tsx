'use client';

import { useEffect, useState } from 'react';

type Form = {
  title: string;
  id: string;
};

const forms: Form[] = [
  {
    title: 'Client Intake',
    id: 'guardians-digital-new-client',
  },
  {
    title: 'Ambassador Onboarding Form',
    id: 'guardians-digital-ambassador-onboarding-form',
  },
];

export default function HomePage() {
  const [activeForm, setActiveForm] = useState(forms[0]);

  useEffect(() => {
    // Clear any existing embedded forms
    const container = document.getElementById('paperform-container');
    if (container) container.innerHTML = `<div data-paperform-id="${activeForm.id}"></div>`;

    // Remove old embed script if it exists
    const oldScript = document.querySelector('script[src="https://paperform.co/__embed.min.js"]');
    if (oldScript) oldScript.remove();

    // Add Paperform embed script
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, [activeForm]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Client Forms</h1>

      <div className="flex justify-center mb-4">
        <select
          value={activeForm.id}
          onChange={(e) =>
            setActiveForm(forms.find((form) => form.id === e.target.value)!)
          }
          className="border p-2 rounded"
        >
          {forms.map((form) => (
            <option key={form.id} value={form.id}>
              {form.title}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">{activeForm.title}</h2>
        <div id="paperform-container" />
      </div>
    </main>
  );
}
