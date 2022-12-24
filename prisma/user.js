import prisma from "./prisma";


export const getAllUser = async () => {
  const user = await prisma.user.findMany({})
  return user
}

export const getUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}


export const createUser = async (email, nama, tangalLahir) => {
  const user = await prisma.user.create({
    data: {
      email,
      nama,
      tangalLahir
    }
  })
  return user
}

export const updateUser = async (id, email, nama, tangalLahir) => {
  const user = await prisma.user.update({
    where: {
      id
    }, data: {
      email, nama, tangalLahir
    }
  })
  return user
}

export const deleteUser = async (id) => {
  const user = await prisma.user.delete({ where: { id } })
  return user
} 