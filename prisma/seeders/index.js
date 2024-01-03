const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { threat_type } = require("./threat-types");
const { threat } = require("./threats");
const {
  statusStafCondition,
  status_app_testing_period,
  status_indirect_unit,
  reff_currency,
} = require("./references");

async function main() {
  await threat_type();
  await threat();
  await statusStafCondition();
  await status_app_testing_period();
  await status_indirect_unit();
  await reff_currency();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
