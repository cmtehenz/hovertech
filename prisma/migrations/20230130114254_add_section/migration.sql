/*
  Warnings:

  - You are about to drop the column `mapaCelulaId` on the `components` table. All the data in the column will be lost.
  - You are about to drop the column `mapaMotorId` on the `components` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "components" DROP CONSTRAINT "components_mapaCelulaId_fkey";

-- DropForeignKey
ALTER TABLE "components" DROP CONSTRAINT "components_mapaMotorId_fkey";

-- AlterTable
ALTER TABLE "components" DROP COLUMN "mapaCelulaId",
DROP COLUMN "mapaMotorId",
ADD COLUMN     "sectionId" TEXT;

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mapaMotorId" TEXT,
    "mapaCelulaId" TEXT,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_mapaMotorId_fkey" FOREIGN KEY ("mapaMotorId") REFERENCES "MapasMotor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_mapaCelulaId_fkey" FOREIGN KEY ("mapaCelulaId") REFERENCES "MapasCelula"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "components" ADD CONSTRAINT "components_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;
