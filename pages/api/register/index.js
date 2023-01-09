import prisma from "prisma/prisma"
import { createUser } from "prisma/register"
import { getToken } from "next-auth/jwt"
export default async function handle(req, res) {
  const secret = process.env.NEXTAUTH_SECRET
  try {
    switch (req.method) {
      case 'GET': {
        const token = await getToken({ req, secret })
        return res.status(200).json({ data: 'ok', token: token })
      }
      case 'POST': {
        const { email, password, role } = req.body
        try {
          const EmailCheck = await prisma.xuser.findUnique({
            where: {
              email: email
            }

          })
          if (EmailCheck) return res.status(201).json({ msg: 'Email Sudah Ada!' })

          const user = await createUser(email, password, role)
          return res.status(200).json(user)
        } catch (error) {
          return res.status(500).json({ msg: 'error code' })
        }

      }


    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}