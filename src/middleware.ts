import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Redirect non-www to www (301 permanent)
  if (
    host === "calculemprunteur.fr" ||
    host === "calculemprunteur.vercel.app"
  ) {
    const url = request.nextUrl.clone();
    url.host = "www.calculemprunteur.fr";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_next/static|_next/image|favicon\\.ico|icon-|apple-touch|logo|api/).*)",
  ],
};
