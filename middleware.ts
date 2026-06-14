import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

function appHost() {
  try {
    return process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL).host
      : "";
  } catch {
    return "";
  }
}

function isPanelPath(path: string) {
  return (
    path === "/login" ||
    path.startsWith("/auth") ||
    path === "/dashboard" ||
    path.startsWith("/dashboard/")
  );
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const appH = appHost();
  const isApp = !!appH && host === appH;
  const path = request.nextUrl.pathname;

  // На субдомене панели корень ведёт сразу в дашборд
  if (isApp && path === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Сессии и защита нужны только разделу панели; лендинг и редиректы публичны
  if (isPanelPath(path)) {
    return await updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
