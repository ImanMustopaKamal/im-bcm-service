const prisma = require("../config/database");

const findAll = async (filter) => {
  const threats = await prisma.threat.findMany(filter);

  return threats;
};

const findThreats = async (is_active, type_id, name) => {
    const threats = await prisma.threat.findMany({
        where : {
            is_active: is_active,
            type_id : type_id,
            name : {
                contains : name}
        },
        orderBy : {
            name : 'asc'
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

const createThreat = async(threat) => {
    const cThreat = await prisma.threat.create({
        data : threat
    });
    return cThreat;
};

const updateThreat = async(threat_id, data) => {
    const cThreat = await prisma.threat.update({
        where : {
            id : threat_id
        },
        data : data
    });
    return cThreat;
};

const deleteThreat = async(threat_id) => {
    const dThreat = await prisma.threat.delete({
        where : {
            id: threat_id
        }
    });
    return dThreat;
};

module.exports = {
    findAll, findThreats, findByID, createThreat, updateThreat, deleteThreat
}