const { PrismaClient } = require("@prisma/client");
const { nanoid } = require("nanoid");
const prisma = new PrismaClient();

const threat = async () => {
  const name = await prisma.threat_type.findUnique({
    where: {
      tenant_id_name : {
        tenant_id : "H3pZkf7W",
        name : "Bencana Alam"
      }
    },
  })
  
  const list = [
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Kebakaran",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Gelombang Ekstrim",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Kebakaran Hutan",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Kekeringan",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Likuifaksi",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Tsunami",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Wabah",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Cuaca Ekstrim",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Gunung Meletus",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Tanah Longsor",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Gempa Bumi",
      is_active: true,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      type_id: name.id,
      name: "Banjir",
      is_active: true,
    },
  ];
  await prisma.threat.createMany({
    data: list,
  });
};

module.exports = {
  threat,
};
