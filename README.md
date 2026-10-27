# Next Room Reserve API

Next.js Route Handlers + Prisma 7 + MySQL. Database: `room_reserve_db`.

## Run

MySQL service `mysql8` must be running. The local `.env` is configured with the database-specific `room_reserve_app` account; do not replace it with the root account. The root password is kept separately in `.mysql-admin.env`. Both secret files are ignored by Git; keep them private.

The Prisma schema has been applied. If you change `prisma/schema.prisma`, update the database with `npm run db:push`.

Start the API with `npm run dev` at `http://localhost:3000`.

The `node_modules` entry is a junction to `E:\6752410028 fone\next-manage-product-app\node_modules`, so this project does not install a duplicate dependency tree. Keep that sibling project in place while using this app.

## Routes

- `POST, GET /api/rooms`
- `GET, PATCH, DELETE /api/rooms/[id]`
- `GET /api/rooms/[id]/bookings`
- `GET /api/rooms/available`
- `POST, GET /api/bookings`
- `GET, PATCH, DELETE /api/bookings/[id]`
- `GET /api/bookings/upcoming`
- `GET /api/bookings/stats`
- `DELETE /api/bookings/expired`
