/*
  Warnings:

  - You are about to drop the `Marker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarkerGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ObjectTypes" AS ENUM ('MARKER', 'AREA', 'PATH');

-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_mapId_fkey";

-- DropForeignKey
ALTER TABLE "Marker" DROP CONSTRAINT "Marker_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "MarkerGroup" DROP CONSTRAINT "MarkerGroup_mapId_fkey";

-- DropForeignKey
ALTER TABLE "MarkerGroup" DROP CONSTRAINT "MarkerGroup_parentId_fkey";

-- DropTable
DROP TABLE "Marker";

-- DropTable
DROP TABLE "MarkerGroup";

-- CreateTable
CREATE TABLE "Object" (
    "id" TEXT NOT NULL,
    "type" "ObjectTypes" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "position" JSONB NOT NULL,
    "mapId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "parentId" TEXT,
    "mapId" TEXT NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
