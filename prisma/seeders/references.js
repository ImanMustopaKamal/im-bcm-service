const { PrismaClient } = require("@prisma/client");
const { nanoid } = require("nanoid");
const prisma = new PrismaClient();

const statusStafCondition = async () => {
  const list = [
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Meninggal",
      sort_order: 1,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Dirawat",
      sort_order: 2,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Tidak Dapat Dihubungi",
      sort_order: 3,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Pegawai/Keluarga Tidak Terdampak",
      sort_order: 4,
    },
  ];

  await prisma.staff_Condition.createMany({
    data: list,
  });
}

const status_app_testing_period = async () => {
  const list = [
    {
      code: 'I',
      tenant_id: "H3pZkf7W",
      name: "Periode I",
      sort_order: 1,
    },
    {
      code: 'II',
      tenant_id: "H3pZkf7W",
      name: "Periode II",
      sort_order: 2,
    },
    {
      code: 'III',
      tenant_id: "H3pZkf7W",
      name: "Periode III",
      sort_order: 3,
    },
    {
      code: 'IV',
      tenant_id: "H3pZkf7W",
      name: "Periode IV",
      sort_order: 4,
    },
    {
      code: 'V',
      tenant_id: "H3pZkf7W",
      name: "Periode V",
      sort_order: 5,
    },
  ];

  await prisma.app_Testing_Period.createMany({
    data: list,
  });
}

const status_indirect_unit = async () => {
  const list = [
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Korporasi",
      sort_order: 1,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Menengah",
      sort_order: 2,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Kecil",
      sort_order: 3,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Konsumer",
      sort_order: 4,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Sinergi BUMN",
      sort_order: 5,
    },
    {
      id: nanoid(8),
      tenant_id: "H3pZkf7W",
      name: "Perusahaan Anak",
      sort_order: 6,
    },
  ];

  await prisma.indirect_Unit.createMany({
    data: list,
  });
}

const reff_currency = async () => {
  const list = [
    {
      code: "360",
      tenant_id: "H3pZkf7W",
      name: "IDR",
      description: "Indonesian rupiah",
      sort_order: 1,
    },
    {
      code: "392",
      tenant_id: "H3pZkf7W",
      name: "YEN",
      description: "Japanese yen",
      sort_order: 2,
    },
    {
      code: "840",
      tenant_id: "H3pZkf7W",
      name: "USD",
      description: "United States dollar",
      sort_order: 3,
    },
    {
      code: "702",
      tenant_id: "H3pZkf7W",
      name: "SGD",
      description: "Singapore dollar",
      sort_order: 4,
    },
    {
      code: "344",
      tenant_id: "H3pZkf7W",
      name: "HGD",
      description: "Hong Kong dollar",
      sort_order: 5,
    },
  ];

  await prisma.currency.createMany({
    data: list,
  });
}

module.exports = {
  statusStafCondition,
  status_app_testing_period,
  status_indirect_unit,
  reff_currency
}