import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const hasValidClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith("pk_")

const isProtectedRoute = createRouteMatcher(["/admin(.*)", "/protected(.*)", "/pending-approval(.*)"])

export default hasValidClerkKey
  ? clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        await auth.protect()
      }
      return NextResponse.next()
    })
  : function middleware(req: NextRequest) {
      if (req.nextUrl.pathname.startsWith("/admin") || req.nextUrl.pathname.startsWith("/protected") || req.nextUrl.pathname.startsWith("/pending-approval")) {
        return NextResponse.redirect(new URL("/sign-in", req.url))
      }
      return NextResponse.next()
    }

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
