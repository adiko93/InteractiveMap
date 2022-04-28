/*
  Warnings:

  - You are about to drop the column `mapId` on the `Entity` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Entity" DROP CONSTRAINT "Entity_mapId_fkey";

-- AlterTable
ALTER TABLE "Entity" DROP COLUMN "mapId";
