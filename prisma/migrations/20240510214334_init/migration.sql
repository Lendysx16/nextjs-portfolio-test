-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('web', 'photos');

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "tag" "Tags" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "git_url" TEXT,
    "live_url" TEXT,
    "img_url" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
