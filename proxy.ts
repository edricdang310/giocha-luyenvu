import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || request.headers.get('x-forwarded-host') || '';

  // Clean port from host if present (e.g. "localhost:3000" -> "localhost")
  const hostname = host.split(':')[0].toLowerCase();

  // Allowed domains list
  const allowedHosts = [
    'giochaluyenvu.shop',
    'www.giochaluyenvu.shop',
    'localhost',
    '123.30.233.100',
  ];

  // Check if hostname is allowed or is a Vercel preview domain
  const isAllowed = allowedHosts.includes(hostname) || hostname.endsWith('.vercel.app');

  if (!isAllowed && hostname) {
    console.warn(`Blocking unauthorized host request: ${hostname}`);

    // Redirect unauthorized domains to the official canonical domain
    const canonicalUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://giochaluyenvu.shop');
    return NextResponse.redirect(canonicalUrl, 301);
  }

  return NextResponse.next();
}

// Config to specify matching routes (skip static assets for performance)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml, robots.txt, and image formats
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap\\.xml|robots\\.txt|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp).*)',
  ],
};
