import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  // 🔐 Optional: Add JWT decoding/validation here if needed

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// 👇 Limit middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
