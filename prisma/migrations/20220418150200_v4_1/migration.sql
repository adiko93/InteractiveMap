/*
  Warnings:

  - You are about to drop the `Object` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EntityTypes" AS ENUM ('MARKER', 'AREA', 'PATH');

-- DropForeignKey
ALTER TABLE "Object" DROP CONSTRAINT "Object_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Object" DROP CONSTRAINT "Object_folderId_fkey";

-- DropForeignKey
ALTER TABLE "Object" DROP CONSTRAINT "Object_mapId_fkey";

-- DropForeignKey
ALTER TABLE "Object" DROP CONSTRAINT "Object_updatedById_fkey";

-- DropTable
DROP TABLE "Object";

-- DropEnum
DROP TYPE "ObjectTypes";

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "type" "EntityTypes" NOT NULL,
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

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
