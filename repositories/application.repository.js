const prisma = require("../config/database");

const findApplications = async (filter) => {
  const products = await prisma.ref_applications.findMany(filter);

  return products;
};

const findByID = async (id) => {
    const apps = await prisma.ref_applications.findUnique({
        where : {
            id : id
        }
    });

    return apps;
};

const createApplication = async(apps) => {
    const cApps = await prisma.ref_applications.create({
        data : apps
    });

    return cApps;
};

const updateApplications = async(apps_id, data) => {
    const cApps = await prisma.ref_applications.update({
        where : {
            id : apps_id
        },
        data : data
    });
    return cApps;
};

const deleteApplications = async(apps_id) => {
    const dApps = await prisma.ref_applications.delete({
        where : {
            id: apps_id
        }
    });
    return dApps;
};

module.exports = {
    findApplications, findByID, createApplication, updateApplications, deleteApplications
}