const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const especie = await prisma.Especie.upsert({
            where: { id: 1 },
            update: {},
            create: {
                especie: "D. leucas",
                nombreCientifico: "Delphinapterus leucas",
                familia: "Monodontidae",
                biologoId: 1
            },
        });


        console.log("Create 1 especie");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
