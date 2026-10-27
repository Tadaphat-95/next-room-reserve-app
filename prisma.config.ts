import "dotenv/config";
import { defineConfig } from "prisma/config";
const user = encodeURIComponent(process.env.DATABASE_USER ?? "root");
const password = encodeURIComponent(process.env.DATABASE_PASSWORD ?? "");
const host = process.env.DATABASE_HOST ?? "localhost";
const port = process.env.DATABASE_PORT ?? "3306";
const database = process.env.DATABASE_NAME ?? "room_reserve_db";
export default defineConfig({ schema: "prisma/schema.prisma", migrations: { path: "prisma/migrations" }, datasource: { url: process.env.DATABASE_URL ?? `mysql://${user}:${password}@${host}:${port}/${database}` } });
