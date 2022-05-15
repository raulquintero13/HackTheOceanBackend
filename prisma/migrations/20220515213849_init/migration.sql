/*
  Warnings:

  - You are about to alter the column `ph` on the `Ubicaciones` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `VarChar(128)`.

*/
-- AlterTable
ALTER TABLE "Biologo" ALTER COLUMN "organizacion" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Especie" ALTER COLUMN "especie" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "nombreCientifico" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "familia" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Ubicaciones" ALTER COLUMN "ph" DROP DEFAULT,
ALTER COLUMN "ph" SET DATA TYPE VARCHAR(128);
