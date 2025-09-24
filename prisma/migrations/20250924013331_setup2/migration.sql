/*
  Warnings:

  - You are about to drop the `interactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `leads` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."interactions" DROP CONSTRAINT "interactions_lead_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."interactions" DROP CONSTRAINT "interactions_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."leads" DROP CONSTRAINT "leads_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."organization_users" DROP CONSTRAINT "organization_users_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."organization_users" DROP CONSTRAINT "organization_users_user_id_fkey";

-- DropTable
DROP TABLE "public"."interactions";

-- DropTable
DROP TABLE "public"."leads";

-- DropTable
DROP TABLE "public"."organization_users";

-- DropTable
DROP TABLE "public"."organizations";

-- DropTable
DROP TABLE "public"."users";
