const { PrismaClient } = require("@prisma/client");
const { nanoid } = require("nanoid");
const prisma = new PrismaClient();

const threat_type = async () => {
  const list = [
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Bencana Alam",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Insiden Teknis",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Bencana Buatan Manusia",
      is_active: true,
    }
  ];
  await prisma.threat_type.createMany({
    data: list,
  });
  
};

module.exports = {
  threat_type,
};
