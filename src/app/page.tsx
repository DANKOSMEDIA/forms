// app/page.tsx
'use client';

import Script from 'next/script';

export default function Page() {
  return (
    <>
      {/* Paperform embed target */}
      <div data-paperform-id="guardians-digital-ambassador-onboarding-form"></div>

      {/* Load the Paperform embed script after the page becomes interactive */}
      <Script
        src="https://paperform.co/__embed.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}