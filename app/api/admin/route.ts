import { currentRole } from "@/lib/userInfo";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(){
    const role = await currentRole();
    if(role === UserRole.admin) return new NextResponse(null, {status: 200})
    return new NextResponse(null, {status: 403})
}