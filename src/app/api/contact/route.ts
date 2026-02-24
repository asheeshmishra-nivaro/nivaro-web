import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    // DIAGNOSTIC CHECK
    if (!process.env.DATABASE_URL) {
        console.error("DIAGNOSTIC: DATABASE_URL is MISSING from process.env");
    } else {
        console.log("DIAGNOSTIC: DATABASE_URL is PRESENT in process.env");
    }

    try {
        const { name, organization, interestType, email, phone, message } = await req.json();

        if (!name || !organization || !interestType || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const inquiry = await prisma.contact_inquiries.create({
            data: {
                name,
                organization,
                interest_type: interestType,
                email,
                phone,
                message,
            },
        });

        return NextResponse.json(inquiry, { status: 201 });
    } catch (error: any) {
        console.error("Failed to create inquiry:", {
            message: error.message,
            code: error.code,
            meta: error.meta,
            stack: error.stack
        });
        return NextResponse.json(
            {
                error: "Internal Server Error",
                details: process.env.NODE_ENV === "development" ? error.message : undefined
            },
            { status: 500 }
        );
    }
}
