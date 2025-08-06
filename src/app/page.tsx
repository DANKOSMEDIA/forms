// app/page.tsx (or pages/index.tsx if using Pages Router)
import Image from 'next/image';

export default function HomePage() {
  const forms = [
    {
      title: 'Client Intake',
      image: '/images/intake.png',
      url: 'https://yourclientintake.paperform.co',
    },
    {
      title: 'Pre-Approval Checklist',
      image: '/images/checklist.png',
      url: 'https://yourchecklist.paperform.co',
    },
    // Add more forms here
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Client Forms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {forms.map((form) => (
          <div key={form.title} className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition">
            <Image
              src={form.image}
              alt={form.title}
              width={400}
              height={250}
              className="rounded-xl object-cover mb-3"
            />
            <h2 className="text-xl font-semibold mb-2">{form.title}</h2>
            <a
              href={form.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open Form
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
