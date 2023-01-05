import prisma from "./prisma";
import bcrypt from 'bcrypt'
export const createUser = async (email, password, role) => {


  const hash = await bcrypt.hash(password, 10);

  const xuser = await prisma.xuser.create({
    data: {
      email,
      password: hash,
      role
    }
  })
  return xuser
}

export const getUser = async (id) => {
  const xuser = await prisma.xuser.findUnique({
    where: { id }
  })
  return xuser
}