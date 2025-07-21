import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const origin = request.headers.get("origin") || "http://localhost:3000";
  const response = NextResponse.redirect(`${origin}/sign-in`);
  response.cookies.set("session", "", { path: "/", maxAge: 0 });
  return response;
} 