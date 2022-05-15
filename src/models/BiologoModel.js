// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BiologoModel{
    static async getAlll(){
        try {
            return await prisma.biologo.findMany({orderBy : [{id: "asc"}]});

        } catch(err){
            return err;
        }
    }
    static async getById(id){
        try {
            return await prisma.biologo.findUnique({
                where: {id: parseInt(id)}
            });
        } catch(err){
            return err;
        }
    }
    static async create(biologo){
        try {
            return await prisma.biologo.create({data: biologo});
        } catch(err) {
            return err;
        }
    }
    static async update(biologo){
        try{
            return await prisma.biologo.update({
                where : {id: biologo.id},
                data: biologo
            });
        } catch(err){
            return err;
        }
    }
    static async delete(id){
        try{
            return await prisma.biologo.delete({where: {id: parseInt(id)}});
        } catch(err){
            return err;
        }
    }
}

module.exports = BiologoModel;
