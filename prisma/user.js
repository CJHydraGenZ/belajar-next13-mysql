import prisma from "./prisma";


export const getAllUser = async () => {
  const xuser = await prisma.xuser.findMany({})
  return xuser.email
}

export const getUser = async (id) => {
  const xuser = await prisma.xuser.findUnique({
    where: { id }
  })
  return xuser
}




export const updateUser = async (id, email, password, role) => {
  const xuser = await prisma.xuser.update({
    where: {
      id
    }, data: {
      email, password, role
    }
  })
  return xuser
}

export const deleteUser = async (id) => {
  const xuser = await prisma.xuser.delete({ where: { id } })
  return xuser
} 