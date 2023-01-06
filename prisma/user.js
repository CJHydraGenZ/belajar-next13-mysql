import prisma from "./prisma";


export const getAllUser = async () => {
  const xuser = await prisma.xuser.findMany({


    // select buat memfillter tampilan data atau memilih data yang akan ditampilkan
    select: {
      id: true,
      email: true,
      role: true
    }
  })
  return xuser
}

export const getUser = async (email) => {
  const xuser = await prisma.xuser.findUnique({
    where: { email }
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