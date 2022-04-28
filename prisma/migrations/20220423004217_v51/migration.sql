-- DropForeignKey
ALTER TABLE "Folder" DROP CONSTRAINT "Folder_mapId_fkey";

-- AlterTable
ALTER TABLE "Folder" ALTER COLUMN "mapId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE SET NULL ON UPDATE CASCADE;
