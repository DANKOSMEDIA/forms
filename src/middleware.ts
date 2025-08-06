import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';  // Make sure to import crypto

export function middleware(request: NextRequest) {
  // Skip CSP in development builds
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  // Generate a new nonce for each request
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

  // Collapse whitespace
  const cspValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  // Copy request headers and set nonce + CSP
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspValue);

  // Create response with modified headers
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', cspValue);

  return response;
}
