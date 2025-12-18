import { withAuth } from "next-auth/middleware";

// This explicitly exports the middleware function that Next.js is looking for
export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",   // protect entire dashboard
    "/api/patient/:path*", // protect APIs
  ],
};