import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiError, bodyOf, jsonError, positiveInt, requiredText } from "@/lib/api";
export const runtime = "nodejs";
export async function GET(req: Request) { try { const u=new URL(req.url), search=u.searchParams.get("search"), min=u.searchParams.get("minCapacity"); const minCapacity=min===null?undefined:positiveInt(min,"minCapacity"); const rooms=await prisma.room.findMany({where:{...(search?{OR:[{roomName:{contains:search}},{location:{contains:search}}]}:{}),...(minCapacity?{capacity:{gte:minCapacity}}:{})},orderBy:{roomCode:"asc"}}); return NextResponse.json(rooms); } catch(e){return jsonError(e);} }
export async function POST(req: Request) { try { const b=await bodyOf(req), roomCode=requiredText(b.roomCode,"roomCode"), roomName=requiredText(b.roomName,"roomName"), location=requiredText(b.location,"location"), capacity=positiveInt(b.capacity,"capacity"); const room=await prisma.room.create({data:{roomCode,roomName,location,capacity}}); return NextResponse.json(room,{status:201}); } catch(e){return jsonError(e);} }
