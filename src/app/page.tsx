'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div data-paperform-id="guardians-digital-ambassador-onboarding-form"></div>
  );
}

