import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export default async function middleware(req) {
  // console.log('Middleware File', req.nextUrl);
  const session = await getToken({ req })
  // console.log('Middleware File session', session);

  if (!session) {
    // const requestPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone()
    url.pathname = `/login`
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}


export const config = {
  matcher: ['/register', '/api/register', '/admin', '/api/user/:path*']
}