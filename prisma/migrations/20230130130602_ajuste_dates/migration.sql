-- DropForeignKey
ALTER TABLE "aircrafts" DROP CONSTRAINT "aircrafts_mapaCelulaId_fkey";

-- DropForeignKey
ALTER TABLE "aircrafts" DROP CONSTRAINT "aircrafts_mapaMotorId_fkey";

-- AlterTable
ALTER TABLE "aircrafts" ALTER COLUMN "mapaMotorId" DROP NOT NULL,
ALTER COLUMN "mapaCelulaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "aircrafts" ADD CONSTRAINT "aircrafts_mapaMotorId_fkey" FOREIGN KEY ("mapaMotorId") REFERENCES "MapasMotor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aircrafts" ADD CONSTRAINT "aircrafts_mapaCelulaId_fkey" FOREIGN KEY ("mapaCelulaId") REFERENCES "MapasCelula"("id") ON DELETE SET NULL ON UPDATE CASCADE;
