import { NextResponse } from "next/server";
import { db } from "../../../src/prisma/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const title = String(body.title || "").trim();
    const summary = String(body.summary || "").trim();
    const description = String(body.description || "").trim();
    const category = String(body.category || "").trim();
    const communityBenefit = String(body.communityBenefit || "").trim();
    const location = String(body.location || "").trim();

    const submitterName = String(body.submitterName || "").trim();
    const submitterEmail = String(body.submitterEmail || "")
      .trim()
      .toLowerCase();

    const memberId = body.memberId
      ? String(body.memberId).trim()
      : null;
      const community = String(body.community || "").trim();
const beneficiaries = String(body.beneficiaries || "").trim();
const problem = String(body.problem || "").trim();
const outcome = String(body.outcome || "").trim();

const phone = String(body.phone || "").trim();
const submitterType = String(body.submitterType || "").trim();
const organization = String(body.organization || "").trim();

const communitySupport = String(body.communitySupport || "").trim();
const supportExplanation = String(body.supportExplanation || "").trim();

const financialInterest = String(body.financialInterest || "").trim();
const interestExplanation = String(body.interestExplanation || "").trim();

const assets = String(body.assets || "").trim();
const assetExplanation = String(body.assetExplanation || "").trim();

const helpNeeded = Array.isArray(body.helpNeeded)
  ? body.helpNeeded.map(String)
  : [];

const additionalInformation = String(
  body.additionalInformation || ""
).trim();

    if (!title) {
      return NextResponse.json(
        { error: "Idea title is required." },
        { status: 400 }
      );
    }

    if (!summary) {
      return NextResponse.json(
        { error: "Idea summary is required." },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: "Idea description is required." },
        { status: 400 }
      );
    }

    if (!communityBenefit) {
      return NextResponse.json(
        { error: "Community benefit is required." },
        { status: 400 }
      );
    }

    if (!submitterName) {
      return NextResponse.json(
        { error: "Your name is required." },
        { status: 400 }
      );
    }

    if (!submitterEmail) {
      return NextResponse.json(
        { error: "Your email address is required." },
        { status: 400 }
      );
    }

    const idea = await db.orm.public.CommunityIdea.create({
      id: crypto.randomUUID(),

      title,
      summary,
      description,

      category: category || null,
      communityBenefit,
      location: location || null,

      submitterName,
submitterEmail,
memberId: memberId || null,

community: community || null,
beneficiaries: beneficiaries || null,
problem: problem || null,
outcome: outcome || null,

phone: phone || null,
submitterType: submitterType || null,
organization: organization || null,

communitySupport: communitySupport || null,
supportExplanation: supportExplanation || null,

financialInterest: financialInterest || null,
interestExplanation: interestExplanation || null,

assets: assets || null,
assetExplanation: assetExplanation || null,

helpNeeded,
additionalInformation: additionalInformation || null,

status: "SUBMITTED",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your idea has been submitted. Thank you for helping move the community forward.",
        idea: {
          id: idea.id,
          title: idea.title,
          status: idea.status,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Community idea submission failed:", error);

    return NextResponse.json(
      {
        error: "We could not save your idea. Please try again.",
      },
      { status: 500 }
    );
  }
}