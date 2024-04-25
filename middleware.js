import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
    publicRoutes: ["/", "/checkout/clerk_catchall_check_1714026684201"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};