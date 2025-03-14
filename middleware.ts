import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const defaultLocale = "es"; // Cambia esto si tu idioma por defecto es otro

export default function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  // Si la ruta no empieza con un código de idioma, redirigir al idioma por defecto
  if (!/^\/(en|es)/.test(pathname)) {
    return NextResponse.redirect(`${origin}/${defaultLocale}${pathname}`);
  }

  // Si la ruta ya tiene un prefijo de idioma, pasar al middleware de next-intl
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|.*\\..*|_next).*)"], // Permite todas las rutas excepto archivos estáticos y API
};
