-- AlterTable
ALTER TABLE "aircrafts" ADD COLUMN     "img_url" TEXT,
ADD COLUMN     "next_manutencao" TIMESTAMP(3),
ADD COLUMN     "status" BOOLEAN;
