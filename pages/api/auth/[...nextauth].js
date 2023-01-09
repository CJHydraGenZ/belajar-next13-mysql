import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

import { getUser } from "prisma/user";
// import prisma from "../../../prisma/prisma"
// import prisma from "../../../lib/prismadb"
// import jwt from "jsonwebtoken"
// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        const { email, password } = credentials
        // console.log('ii', { email, password });
        const user = await getUser(email)
        // console.log('user', user);
        if (!user) {
          throw new Error('Something went wrong!')
        }
        // console.log('inin user', user);
        // const userPass = user.password
        const isMatched = await bcrypt.compare(password, user.password)
        // console.log('isMatched', isMatched);
        if (user && isMatched) {
          // Any object returned will be saved in `user` property of the JWT
          // delete user.password
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // return null
          throw new Error('Invalid User')
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),



  ],
  session: { strategy: "jwt" },
  // jwt: {
  //   // maxAge: 60 * 60 * 24 * 30,
  //   async encode({ secret, token }) {
  //     return jwt.sign(token, secret)
  //   },
  //   async decode({ secret, token }) {
  //     return jwt.verify(token, secret)
  //   }
  // },
  callbacks: {
    async session({ session, user, token }) {
      // console.log('session', { session, token });
      // if (session && token.id) {
      //   session.user.id = token.id
      // }
      return {
        session,
        token
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('jwt', { token, account });
      // if (user && user.id) {
      //   token.id = user.id
      // }
      return token
    },
    pages: {
      signIn: '/login',
      // error: '/api/auth/error',
      // signOut: ''
    }



  }

}

export default NextAuth(authOptions)