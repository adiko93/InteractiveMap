/*
  Warnings:

  - A unique constraint covering the columns `[rootFolderId]` on the table `Map` will be added. If there are existing duplicate values, this will fail.
  - Made the column `mapId` on table `Folder` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `rootFolderId` to the `Map` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Folder" DROP CONSTRAINT "Folder_mapId_fkey";

-- AlterTable
ALTER TABLE "Folder" ALTER COLUMN "mapId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Map" ADD COLUMN     "rootFolderId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Map_rootFolderId_key" ON "Map"("rootFolderId");

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Map" ADD CONSTRAINT "Map_rootFolderId_fkey" FOREIGN KEY ("rootFolderId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
