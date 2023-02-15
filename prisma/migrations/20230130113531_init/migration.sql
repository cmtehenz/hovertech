-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aircrafts" (
    "id" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "engine_model" TEXT NOT NULL,
    "serial_celula" TEXT NOT NULL,
    "serial_engine" TEXT NOT NULL,
    "fabricante_celula" TEXT NOT NULL,
    "fabricante_engine" TEXT NOT NULL,
    "date_maker_engine" TIMESTAMP(3) NOT NULL,
    "date_maker_celula" TIMESTAMP(3) NOT NULL,
    "usage" DECIMAL(65,30) NOT NULL,
    "time_celula" DECIMAL(65,30) NOT NULL,
    "time_engine" DECIMAL(65,30) NOT NULL,
    "n1" DECIMAL(65,30) NOT NULL,
    "n2" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "mapaMotorId" TEXT NOT NULL,
    "mapaCelulaId" TEXT NOT NULL,

    CONSTRAINT "aircrafts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MapasMotor" (
    "id" TEXT NOT NULL,

    CONSTRAINT "MapasMotor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MapasCelula" (
    "id" TEXT NOT NULL,

    CONSTRAINT "MapasCelula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "components" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "part_number" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "date_instalation" TIMESTAMP(3) NOT NULL,
    "time_since_new_engine" DECIMAL(65,30) NOT NULL,
    "time_since_new_component" DECIMAL(65,30) NOT NULL,
    "time_since_overhall_component" DECIMAL(65,30) NOT NULL,
    "frequency" DECIMAL(65,30) NOT NULL,
    "type_frenquency" TEXT NOT NULL,
    "time_serial_new_now" DECIMAL(65,30) NOT NULL,
    "time_serial_overhall_now" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "mapaMotorId" TEXT,
    "mapaCelulaId" TEXT,

    CONSTRAINT "components_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aircrafts_prefix_key" ON "aircrafts"("prefix");

-- AddForeignKey
ALTER TABLE "aircrafts" ADD CONSTRAINT "aircrafts_mapaMotorId_fkey" FOREIGN KEY ("mapaMotorId") REFERENCES "MapasMotor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aircrafts" ADD CONSTRAINT "aircrafts_mapaCelulaId_fkey" FOREIGN KEY ("mapaCelulaId") REFERENCES "MapasCelula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "components" ADD CONSTRAINT "components_mapaMotorId_fkey" FOREIGN KEY ("mapaMotorId") REFERENCES "MapasMotor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "components" ADD CONSTRAINT "components_mapaCelulaId_fkey" FOREIGN KEY ("mapaCelulaId") REFERENCES "MapasCelula"("id") ON DELETE SET NULL ON UPDATE CASCADE;
