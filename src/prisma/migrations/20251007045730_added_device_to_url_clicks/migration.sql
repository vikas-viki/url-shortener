/*
  Warnings:

  - Added the required column `device` to the `Clicks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `os` to the `Clicks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clicks" ADD COLUMN     "device" TEXT NOT NULL,
ADD COLUMN     "os" TEXT NOT NULL;
