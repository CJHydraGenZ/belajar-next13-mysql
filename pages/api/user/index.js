import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../../../prisma/user";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {

        const users = await getAllUser()
        return res.status(200).json(users)

      }
      case 'POST': {
        const { email, nama, tangalLahir } = req.body
        const user = await createUser(email, nama, tangalLahir)
        return res.status(200).json(user)
      }


    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}