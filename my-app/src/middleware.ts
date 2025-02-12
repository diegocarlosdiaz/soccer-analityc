import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/login', '/register']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  console.log('Middleware ejecutándose en ruta:', pathname)
  console.log('Token actual:', token)

  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  if (!token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', encodeURIComponent(pathname))
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!login|register|_next/static|_next/image|favicon.ico).*)'
  ]
}