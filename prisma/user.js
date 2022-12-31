import prisma from "./prisma";


export const getAllUser = async () => {
  const xuser = await prisma.xuser.findMany({})
  return xuser
}

export const getUser = async (id) => {
  const xuser = await prisma.xuser.findUnique({
    where: { id }
  })
  return xuser
}


export const createUser = async (email, nama, tangalLahir) => {
  const xuser = await prisma.xuser.create({
    data: {
      email,
      nama,
      tangalLahir
    }
  })
  return xuser
}

export const updateUser = async (id, email, nama, tangalLahir) => {
  const xuser = await prisma.xuser.update({
    where: {
      id
    }, data: {
      email, nama, tangalLahir
    }
  })
  return xuser
}

export const deleteUser = async (id) => {
  const xuser = await prisma.xuser.delete({ where: { id } })
  return xuser
} 