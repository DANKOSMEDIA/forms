'use client';

import { useEffect, useState } from 'react';

type Form = {
  title: string;
  id: string; // This is the Paperform ID from your URL
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

function PaperformEmbed({ id }: { id: string }) {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://paperform.co/__embed"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://paperform.co/__embed';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [id]);

  return <div data-paperform-id={id}></div>;
}

export default function HomePage() {
  const [activeForm, setActiveForm] = useState(forms[0]);

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
        <PaperformEmbed id={activeForm.id} />
      </div>
    </main>
  );
}
