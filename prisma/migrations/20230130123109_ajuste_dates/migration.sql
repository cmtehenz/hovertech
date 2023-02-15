-- AlterTable
ALTER TABLE "aircrafts" ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "components" ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "image_url" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;
