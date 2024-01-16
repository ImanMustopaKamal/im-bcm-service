const { PrismaClient } = require("@prisma/client");
const { nanoid } = require("nanoid");
const prisma = new PrismaClient();

const workflow_status = async () => {
  const list = [
    {
      id: 1,
      name: "DRAFT",
      is_active: true
    },
    {
      id: 2,
      name: "PENDING",
      is_active: true
    },
    {
      id: 3,
      name: "APPROVED",
      is_active: true
    },
    {
      id: 4,
      name: "REJECTED",
      is_active: true
    },
    {
      id: 5,
      name: "CANCELLED",
      is_active: true
    },
    {
      id: 6,
      name: "CLOSED",
      is_active: true
    },
  ];
  await prisma.workflow_status.createMany({
    data: list,
  });
  
};

module.exports = {
  workflow_status,
};
