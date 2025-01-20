import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rutas que serán públicas
const publicRoutes = ['/login', '/register']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value
  const { pathname } = request.nextUrl

  // Permitir rutas públicas sin autenticación
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Si no hay token y la ruta no es pública, redirigir a login
  if (!token) {
    const loginUrl = new URL('/login', request.url)
    // Guardar la URL original para redirigir después del login
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Configurar en qué rutas se ejecutará el middleware
export const config = {
  matcher: [
    '/((?!login|register|api|_next/static|_next/image|favicon.ico).*)'
  ]
}
