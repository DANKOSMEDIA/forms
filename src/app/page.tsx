// app/page.tsx
'use client';

import Image from 'next/image';

export default function HomePage() {
  const forms = [
    {
      title: 'Client Intake',
      image: '/images/intake.png',
      embedUrl: 'https://guardians-digital-new-client.paperform.co',
    },
    {
      title: 'Ambassador Onboarding Form',
      image: '/images/checklist.png',
      embedUrl: 'https://guardians-digital-ambassador-onboarding-form.paperform.co',
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Client Forms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {forms.map((form) => (
          <div
            key={form.title}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-3 text-center">
              {form.title}
            </h2>
            <Image
              src={form.image}
              alt={form.title}
              width={400}
              height={200}
              className="rounded-xl object-cover mb-4 mx-auto"
            />
            <iframe
              src={form.embedUrl}
              title={form.title}
              style={{ width: '100%', height: '600px', border: 'none', borderRadius: '12px' }}
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

