-- CreateTable
CREATE TABLE "Biologo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(128) NOT NULL,
    "organizacion" VARCHAR(255) NOT NULL,
    "especialidad" VARCHAR(128) NOT NULL,
    "pais" VARCHAR(128) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Biologo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especie" (
    "id" SERIAL NOT NULL,
    "especie" VARCHAR(255) NOT NULL,
    "nombreCientifico" VARCHAR(255) NOT NULL,
    "familia" VARCHAR(255) NOT NULL,
    "biologoId" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Especie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ubicaciones" (
    "id" SERIAL NOT NULL,
    "coordenadas" VARCHAR(128) NOT NULL,
    "ph" VARCHAR(128) NOT NULL,
    "especieId" INTEGER NOT NULL,
    "biologoId" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ubicaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "biologoId" INTEGER NOT NULL,
    "password" VARCHAR(128) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Especie" ADD CONSTRAINT "Especie_biologoId_fkey" FOREIGN KEY ("biologoId") REFERENCES "Biologo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ubicaciones" ADD CONSTRAINT "Ubicaciones_biologoId_fkey" FOREIGN KEY ("biologoId") REFERENCES "Biologo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ubicaciones" ADD CONSTRAINT "Ubicaciones_especieId_fkey" FOREIGN KEY ("especieId") REFERENCES "Especie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_biologoId_fkey" FOREIGN KEY ("biologoId") REFERENCES "Biologo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
