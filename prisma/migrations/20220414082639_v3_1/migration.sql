/*
  Warnings:

  - Added the required column `groupId` to the `Marker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Marker" ADD COLUMN     "groupId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MarkerGroup" (
    "id" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "mapId" TEXT NOT NULL,

    CONSTRAINT "MarkerGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Marker" ADD CONSTRAINT "Marker_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "MarkerGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerGroup" ADD CONSTRAINT "MarkerGroup_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "MarkerGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkerGroup" ADD CONSTRAINT "MarkerGroup_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
