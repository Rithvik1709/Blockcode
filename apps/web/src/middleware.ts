import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // TODO: Add Supabase session check if needed
  return NextResponse.next();
}
