import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Use Web Crypto API; crypto is a global in the edge runtime
  const nonce = crypto.randomUUID();

  const cspHeader = `
    default-src 'self';
    script-src 'nonce-${nonce}' 'strict-dynamic' 'self'
      https://guardiansform.vercel.app
      https://paperform.co https://*.paperform.co
      https://dashboard.copilot.app https://*.copilot.app;
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' blob: data:;
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
  const cspValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspValue);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', cspValue);

  return response;
}

