import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';  // import crypto so randomUUID() is available

export function middleware(request: NextRequest) {
  // Skip CSP in development
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Create a unique nonce for this response
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Build the CSP header using the nonce
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

  // Collapse whitespace so the CSP header is valid
  const cspValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  // Clone request headers and set the nonce and CSP
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspValue);

  // Build the response with the updated headers
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', cspValue);

  return response;
}
