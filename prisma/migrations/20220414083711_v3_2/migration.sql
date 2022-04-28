/*
  Warnings:

  - You are about to drop the column `title` on the `Marker` table. All the data in the column will be lost.
  - Added the required column `color` to the `Map` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Map` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Marker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `MarkerGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `MarkerGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MarkerGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Map" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Marker" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MarkerGroup" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "icon" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
