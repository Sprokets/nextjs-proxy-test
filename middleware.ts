import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // protect dev routes in production

  if (
    !request.nextUrl.pathname.startsWith('/dev') &&
    !request.nextUrl.pathname.startsWith('/_next') &&
    !request.nextUrl.pathname.startsWith('/favicon') &&
    !request.nextUrl.pathname.startsWith('/serviceworker')
  ) {
    console.log('pathname');
    console.log(request.nextUrl.pathname);
    console.log(request.headers.get('host'));
    console.log(request.nextUrl);
    console.log(request.url);
  }
}
