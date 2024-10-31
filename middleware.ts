import { withAuth } from "next-auth/middleware";
import { routePaths } from "./data/routePaths";

export default withAuth({
  pages: {
    signIn: routePaths.SIGN_IN,
  },
});

export const config = {
  matcher: ["/", "/chat", "/chat:path*"],
};
