import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/domain/utils/hashPassword'
const prisma = new PrismaClient()
async function main() {
  const leandro = await prisma.user.upsert({
    where: { email: 'leandro@leandrocode.com' },
    update: {},
    create: {
      email: 'lmarcelos2019@gmail.com',
      name: 'Leandro Marcelo',
      password: await hashPassword('leandro123')
    }
  })

  const kelvin = await prisma.user.upsert({
    where: { email: 'kelvin12378945610@gmail.com' },
    update: {},
    create: {
      email: 'kelvin12378945610@gmail.com',
      name: 'Kelvin Báez',
      password: await hashPassword('kelvin123')
    }
  })

  const yhona = await prisma.user.upsert({
    where: { email: 'yhona.king@gmail.com' },
    update: {},
    create: {
      email: 'yhona.king@gmail.com',
      name: 'Yhona Peguero',
      password: await hashPassword('yhona123')
    }
  })

  return [leandro, kelvin, yhona]
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
