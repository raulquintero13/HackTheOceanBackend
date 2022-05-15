
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
<<<<<<< HEAD
        try{
            return await prisma.Ubicaciones.create({ data: ubicacion });
=======
        console.log(ubicacion)
        try{
            return await prisma.ubicaciones.create({ data: ubicacion });
>>>>>>> ab20749a6b52f94f120fde98dcc2d0644a34d2a1
        } catch( err ) {
            return err;
        }
    }

    static async update(ubicacion){
<<<<<<< HEAD
        try{
            return await prisma.Ubicaciones.update({
=======
        console.log(ubicacion)
        try{
            return await prisma.ubicaciones.update({
>>>>>>> ab20749a6b52f94f120fde98dcc2d0644a34d2a1
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