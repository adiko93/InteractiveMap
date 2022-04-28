-- DropForeignKey
ALTER TABLE "MarkerGroup" DROP CONSTRAINT "MarkerGroup_parentId_fkey";

-- AlterTable
ALTER TABLE "MarkerGroup" ALTER COLUMN "parentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MarkerGroup" ADD CONSTRAINT "MarkerGroup_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "MarkerGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
