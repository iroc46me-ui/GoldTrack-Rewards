import { NextResponse } from "next/server";
import { db } from "../../../src/prisma/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      displayName,
      email,
      countryRegion,
      participation,
      reasonForJoining,
      commitmentAccepted,
    } = body;

    if (!displayName?.trim()) {
      return NextResponse.json(
        { error: "Display name is required." },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    if (!commitmentAccepted) {
      return NextResponse.json(
        { error: "Community commitment must be accepted." },
        { status: 400 }
      );
    }

    const runtime = await db.connect();

    const plan = db.sql.public.communityMember
      .insert([
        {
          id: crypto.randomUUID(),
          displayName: displayName.trim(),
          email: email.trim().toLowerCase(),
          countryRegion: countryRegion?.trim() || null,
          participation: Array.isArray(participation) ? participation : [],
          reasonForJoining: reasonForJoining?.trim() || null,
          commitmentAccepted: true,
          clerkUserId: null,
          status: "ACTIVE",
          
        },
      ])
      .returning("id", "displayName", "email")
      .build();

    const result = await runtime.execute(plan);

    return NextResponse.json({
      success: true,
      member: result[0],
    });
  } catch (error) {
    console.error("Community member submission failed:", error);

    return NextResponse.json(
      { error: "Unable to save your submission." },
      { status: 500 }
    );
  }
}