'use client';

export default function HomePage() {
  const forms = [
    {
      title: 'Client Intake',
      embedUrl: 'https://guardians-digital-new-client.paperform.co',
    },
    {
      title: 'Ambassador Onboarding Form',
      embedUrl: 'https://guardians-digital-ambassador-onboarding-form.paperform.co',
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Client Forms</h1>
      <div className="flex flex-col gap-12">
        {forms.map((form) => (
          <div
            key={form.title}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {form.title}
            </h2>
            <iframe
              src={form.embedUrl}
              title={form.title}
              style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px' }}
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
