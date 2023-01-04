import prisma from "./prisma";

export const createUser = async (email, password, role) => {
  const xuser = await prisma.xuser.create({
    data: {
      email,
      password,
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