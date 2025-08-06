// app/page.tsx (or your component file)
'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Only append the script if it hasn’t been added yet
    if (!document.getElementById('paperform-embed')) {
      const script = document.createElement('script');
      script.id = 'paperform-embed';
      script.src = 'https://paperform.co/__embed.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      data-paperform-id="guardians-digital-ambassador-onboarding-form"
      data-spinner="1"
    />
  );
}
