import { prisma } from '@/utils/db'
import { auth } from '@clerk/nextjs/server'

const createNewUser = async () => {
  const { userId } = await auth()
  const match = await prisma.user.findUnique({
    where: { clerkId: userId as string },
  })
}

const NewUserPage = () => {
  return <div>NewUserPage</div>
}

export default NewUserPage
