/*
  Warnings:

  - A unique constraint covering the columns `[alias]` on the table `Urls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Urls_alias_key" ON "Urls"("alias");

-- CreateIndex
CREATE INDEX "Urls_alias_idx" ON "Urls"("alias");
