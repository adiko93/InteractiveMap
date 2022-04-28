-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_updatedById_fkey";

-- AlterTable
ALTER TABLE "Marker" ALTER COLUMN "updatedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Marker" ADD CONSTRAINT "Marker_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
