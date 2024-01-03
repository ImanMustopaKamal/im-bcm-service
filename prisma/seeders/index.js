const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { threat_type } = require('./threat-types');
const { threat } = require('./threats');

async function main() {
  await threat_type();
  await threat();
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