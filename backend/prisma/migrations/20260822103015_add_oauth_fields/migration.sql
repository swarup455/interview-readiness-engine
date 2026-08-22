/*
  Warnings:

  - You are about to drop the column `experience` on the `CandidateProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CandidateProfile" DROP COLUMN "experience",
ADD COLUMN     "experienceLevel" VARCHAR(80),
ADD COLUMN     "graduationYear" INTEGER,
ADD COLUMN     "targetRole" VARCHAR(160);

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordHash" VARCHAR(255),
ADD COLUMN     "provider" VARCHAR(20),
ADD COLUMN     "providerId" VARCHAR(191);

-- CreateIndex
CREATE UNIQUE INDEX "User_provider_providerId_key" ON "User"("provider", "providerId");
