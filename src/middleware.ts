import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = ["/", "/login", "/signup"];

export function middleware(req: NextRequest) {
	const origin = req.headers.get("origin") ?? "";
	const isAllowed = allowedOrigins.includes(origin);
	if (isAllowed) {
		return NextResponse.next();
	}
}

export const config = {
	matchers: [
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
