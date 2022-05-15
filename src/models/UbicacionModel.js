
// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UbicacionModel{

    static async getAll(){
        try {
            return await prisma.Ubicaciones.findMany({ orderBy: [{ id: "asc",}] });
        } catch(err){
            return err;
        }
    }

    static async getById(id){
        try {
            return await prisma.Ubicaciones.findUnique({
                where: { id: parseInt(id) }
            });
        } catch(err){
            return err;
        }
    }

    static async create(ubicacion){
        console.log(ubicacion)
        try{
            return await prisma.ubicaciones.create({ data: ubicacion });
        } catch( err ) {
            return err;
        }
    }

    static async update(ubicacion){
        console.log(ubicacion)
        try{
            return await prisma.ubicaciones.update({
                where: { id: ubicacion.id },
                data: ubicacion,
            });
        } catch( err ) {
            return err;
        }
    }

    static async delete(id){
        try{
            return await prisma.Ubicaciones.delete({ where: { id: parseInt(id) } });
        } catch(err)  {
            return err;
        }
    }

}


module.exports = UbicacionModel;