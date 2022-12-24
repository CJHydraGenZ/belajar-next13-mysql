import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../../../prisma/user";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const user = await getUser(req.query.id)
        return res.status(200).json(user)
      }

      case 'PUT': {
        const { id } = req.query
        const { email, nama, tangalLahir } = req.body
        const user = await updateUser(id, email, nama, tangalLahir)
        return res.status(200).json(user)
      }
      case 'DELETE': {
        const { id } = req.query
        const user = await deleteUser(id)
        return res.status(200).json(user)
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}