// Require para usar Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UsuarioModel{
    static async getById(id){
        try {
            return await prisma.Usuarios.findUnique({
                where: {id: parseInt(id)}
            });
        } catch(err){
            return err;
        }
    }
    static async create(usuario){
        try {
            return await prisma.Usuarios.create({data: usuario});
        } catch(err) {
            return err;
        }
    }
}

module.exports = UsuarioModel;
