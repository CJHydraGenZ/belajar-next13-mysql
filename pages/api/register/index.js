import prisma from "prisma/prisma"
import { createUser } from "prisma/register"

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        return res.status(200).json({ data: 'ok' })
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