// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BiologoModel{
    static async getAlll(){
        try {
            return await prisma.Biologo.findMany({orderBy : [{id: "asc"}]});

        } catch(err){
            return err;
        }
    }
    static async getById(id){
        try {
            return await prisma.Biologo.findUnique({
                where: {id: parseInt(id)}
            });
        } catch(err){
            return err;
        }
    }
    static async create(biologo){
        try {
            return await prisma.Biologo.create({data: biologo});
        } catch(err) {
            return err;
        }
    }
    static async update(biologo){
        try{
            return await prisma.Biologo.update({
                where : {id: biologo.id},
                data: biologo
            });
        } catch(err){
            return err;
        }
    }
    static async delete(id){
        try{
            return await prisma.Biologo.delete({where: {id: parseInt(id)}});
        } catch(err){
            return err;
        }
    }
}

module.exports = BiologoModel;
