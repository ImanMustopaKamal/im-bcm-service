const prisma = require("../config/database");

const storeNewDisaster = async (disaster, disaster_staff, disaster_direct_unit, disaster_indirect_unit, disaster_atm) => {
    const dis = await prisma.bcm_disaster.create({
        data : disaster
    });
    let dis_staff;
    let dis_direct_unit;
    let dis_indirect_unit;
    let dis_atm;
    if (disaster_staff.length > 0) {        
        dis_staff = await prisma.bcm_disaster_staff_affected.createMany({
            data : disaster_staff,
            skipDuplicates : true
        });
    }    
    if (disaster_direct_unit.length > 0) {
        dis_direct_unit = await prisma.bcm_disaster_unit_affected_dirrect.createMany({
            data : disaster_direct_unit,
            skipDuplicates : true
        });
    }
    if (disaster_indirect_unit) {
        dis_indirect_unit = await prisma.bcm_disaster_unit_affected_indirrect.createMany({
            data : disaster_indirect_unit,
            skipDuplicates : true
        });
    }

    if(disaster_atm.length > 0) {
        dis_atm = await prisma.bcm_disaster_atm_affected.createMany({
            data : disaster_atm,
            skipDuplicates : true
        });
    }

    return {
        disaster : dis,
        disaster_staff_affected : dis_staff,
        disaster_direct_unit : dis_direct_unit,
        disaster_indirect_unit : dis_indirect_unit,
        disaster_atm_affected : dis_atm
    };
};

const findByID = async (id) => {
    const disaster = await prisma.bcm_disaster.findUnique({
        where : {
            "id" : id
        }
    });

    const dis_staff = await prisma.bcm_disaster_staff_affected.findMany({
        where : {
            "disaster_id" : id
        }
    });

    const dis_direct_unit = await prisma.bcm_disaster_unit_affected_dirrect.findMany({
        where : {
            "disaster_id" : id
        }
    });

    const dis_indirect_unit = await prisma.bcm_disaster_unit_affected_indirrect.findMany({
        where : {
            "disaster_id" : id
        }
    });

    const dis_atm = await prisma.bcm_disaster_atm_affected.findMany({
        where: {
            "disaster_id" : id
        }
    });
    return {
        disaster : disaster,
        disaster_staff_affected : dis_staff,
        disaster_direct_unit : dis_direct_unit,
        disaster_indirect_unit : dis_indirect_unit,
        disaster_atm_affected : dis_atm
    };
};

const findAll = async (filter, pagiante) => {
    const disasters = prisma.bcm_disaster.findMany({
        ...filter,
        include : {
            threat : {
                include : {
                    threat_types : true
                }
            }
        },
        take: pagiante.limit,
        skip: pagiante.offset,
        orderBy: {
            "created_at" : "desc"
        }
    });

    return disasters;
};

module.exports = {
    storeNewDisaster, findByID, findAll
};