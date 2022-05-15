
// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class EspecieModel{

    static async getAll(){
        try {
            return await prisma.Especie.findMany({ orderBy: [{ id: 'asc',}] });
        } catch(err){
            return err
        }
    }

    static async getById(id){
        try {
            return await prisma.Especie.findUnique({
                where: { id: parseInt(id) }
            })
        } catch(err){
            return err
        }
    }

    static async create(especie){
        try{
            return await prisma.Especie.create({ data: especie });
        } catch( err ) {
            return err
        }
    }

    static async update(especie){
        try{
            return await prisma.Especie.update({
                where: { id: especie.id },
                data: especie,
            });
        } catch( err ) {
            return err;
        }
    }

    static async delete(id){
        try{
            return await prisma.Especie.delete({ where: { id: parseInt(id) } });
        } catch(err)  {
            return err;
        }
    }

}


module.exports = EspecieModel;