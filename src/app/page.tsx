'use client';

export default function HomePage() {
  const formUrl = 'https://guardians-digital-ambassador-onboarding-form.paperform.co';

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl border border-gray-300">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Ambassador Onboarding Form</h1>
        <p className="text-center text-gray-500 mb-6">Please fill out the form below to join the Guardians Digital Ambassador Program.</p>

        <div className="rounded-xl overflow-hidden border">
          <iframe
            src={formUrl}
            title="Ambassador Onboarding Form"
            className="w-full"
            style={{ height: '850px', border: 'none' }}
            allow="camera; microphone; autoplay; encrypted-media;"
          />
        </div>
      </div>
    </main>
  );
}

