import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.

  {
    callbacks: {
      authorized({ req, token }) {
        console.log('rerae', token);
        if (token) return true // If there is a token, the user is authenticated
      }
    }
  }
)

export const config = { matcher: ["/about"] }