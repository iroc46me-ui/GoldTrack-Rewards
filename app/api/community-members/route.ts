import { NextResponse } from "next/server";
import { db } from "../../../src/prisma/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const displayName = String(body.displayName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const countryRegion = String(body.countryRegion || "").trim();
    const reasonForJoining = String(body.reasonForJoining || "").trim();

    const participation = Array.isArray(body.participation)
      ? body.participation.map(String)
      : [];

    const commitmentAccepted = body.commitmentAccepted === true;

    if (!displayName) {
      return NextResponse.json(
        { error: "Display name is required." },
        { status: 400 }
      );
    }

    if (!email) {
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

    const member = await db.orm.public.CommunityMember.create({
      id: crypto.randomUUID(),
      displayName,
      email,
      countryRegion: countryRegion || null,
      participation,
      reasonForJoining: reasonForJoining || null,
      commitmentAccepted: true,
      clerkUserId: null,
      status: "ACTIVE",
    });

    return NextResponse.json(
      {
        success: true,
        message: "You have been counted. Welcome to the community.",
        member: {
          id: member.id,
          displayName: member.displayName,
          email: member.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Community member submission failed:", error);

    const message =
      error instanceof Error ? error.message : String(error);

    if (
      message.includes("communityMember_email_key") ||
      message.toLowerCase().includes("duplicate key") ||
      message.toLowerCase().includes("unique constraint")
    ) {
      return NextResponse.json(
        {
          error: "This email is already counted in the community.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error: "We could not save your submission. Please try again.",
      },
      { status: 500 }
    );
  }
}