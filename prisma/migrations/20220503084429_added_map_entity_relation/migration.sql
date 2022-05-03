/*
  Warnings:

  - Added the required column `mapId` to the `Entity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entity" ADD COLUMN     "mapId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
