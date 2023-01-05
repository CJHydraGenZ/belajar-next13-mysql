import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@prisma/client"
// import prisma from "../../../prisma/prisma"
// import prisma from "../../../lib/prismadb"
// import jwt from "jsonwebtoken"
// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

  ],
  // pages: {
  //   signIn: '/api/auth/signin',
  //   error: '/api/auth/error',
  // }

  // jwt: {
  //   async encode({ secret, token }) {
  //     return jwt.sign(token, secret)
  //   },
  //   async decode({ secret, token }) {
  //     return jwt.verify(token, secret)
  //   },
  // },



}

export default NextAuth(authOptions)