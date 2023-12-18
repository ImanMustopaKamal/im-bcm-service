const prisma = require("../config/database");

const findAll = async () => {
  const threats = await prisma.threat.findMany();

  return threats;
};

const findThreats = async (type_id, name) => {
    const threats = await prisma.threat.findMany({
        where : {
            type_id : type_id,
            name : {
                contains : name}
        }
    });
  
    return threats;
  };

const findByID = async (threat_id) => {
    const threats = await prisma.threat.findUnique({
        where : {
            id : threat_id
        },
        include : {
            threat_types : true
        }
    });
    
    return threats;
};

const findByType = async (type_id) => {
    const threats = await prisma.threat.findMany({
        where : {
            type_id : type_id
        }
    });
    return threats;
};

const createThreat = async(threat) => {
    const cThreat = await prisma.threat.create({
        data : threat
    });
    return cThreat;
};
module.exports = {
    findAll, findThreats, findByID, findByType, createThreat
}