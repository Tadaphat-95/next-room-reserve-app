import { NextResponse } from "next/server";
export class ApiError extends Error { constructor(public status: number, message: string) { super(message); } }
export function jsonError(error: unknown) {
  if (error instanceof ApiError) return NextResponse.json({ error: error.message }, { status: error.status });
  if (error && typeof error === "object" && "code" in error && (error as {code:string}).code === "P2002") return NextResponse.json({ error: "รหัสห้องซ้ำ" }, { status: 409 });
  console.error(error);
  return NextResponse.json({ error: "เกิดข้อผิดพลาดภายในระบบ" }, { status: 500 });
}
export function requiredText(value: unknown, name: string) { if (typeof value !== "string" || !value.trim()) throw new ApiError(400, `${name} ต้องไม่เป็นค่าว่าง`); return value.trim(); }
export function positiveInt(value: unknown, name: string) { const n = typeof value === "number" ? value : Number(value); if (!Number.isInteger(n) || n <= 0) throw new ApiError(400, `${name} ต้องเป็นจำนวนเต็มมากกว่า 0`); return n; }
export function parseDate(value: unknown, name: string) { if (typeof value !== "string" || !value.trim()) throw new ApiError(400, `${name} ไม่ถูกต้อง`); const d = new Date(value); if (Number.isNaN(d.getTime())) throw new ApiError(400, `${name} ไม่ถูกต้อง`); return d; }
export function interval(start: Date, end: Date) { if (start >= end) throw new ApiError(400, "เวลาเริ่มต้องน้อยกว่าเวลาสิ้นสุด"); }
export async function bodyOf(req: Request) { try { return await req.json() as Record<string, unknown>; } catch { throw new ApiError(400, "รูปแบบ JSON ไม่ถูกต้อง"); } }
export function positiveId(value: string) { const n = Number(value); if (!Number.isInteger(n) || n <= 0) throw new ApiError(400, "id ไม่ถูกต้อง"); return n; }
