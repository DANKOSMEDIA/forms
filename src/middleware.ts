const cspHeader = `
  default-src 'self';
  script-src 'nonce-${nonce}'
    'self'
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


