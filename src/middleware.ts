import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Skip CSP in development so you don’t block Hot Reload etc.
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const cspHeader = `
    default-src 'self';
    script-src 'nonce-${nonce}' 'strict-dynamic'
      https://paperform.co https://*.paperform.co
      https://dashboard.copilot.app https://*.copilot.app;
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    connect-src 'self'
      https://paperform.co https://*.paperform.co
      https://dashboard.copilot.app https://*.copilot.app;
    frame-src https://paperform.co https://*.paperform.co;
    form-action 'self' https://paperform.co https://*.paperform.co;
    base-uri 'self';
    object-src 'none';
    frame-ancestors 'self'
      https://dashboard.copilot.app https://*.copilot.app
      https://guardiansform.vercel.app;
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  // Collapse extra whitespace so the header is valid
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}
