"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function IdeasPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Visual/form stage only.
    // We will connect this to the GoldTrack database/API
    // after the page itself is approved.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <main style={page}>
        <Header />

        <section style={successSection}>
          <div style={eyebrow}>IDEA SUBMISSION</div>

          <h1 style={successTitle}>Your idea is ready for review.</h1>

          <p style={successText}>
            This page is currently in its design and testing stage. No
            information has been transmitted or stored yet.
          </p>

          <div style={successBox}>
            <strong style={{ color: "#e4bd59" }}>
              When the submission system is activated:
            </strong>

            <p style={{ margin: "12px 0 0", lineHeight: 1.7 }}>
              Submitting an idea will not constitute approval, funding, or a
              commitment by GoldTrack Rewards. The first review will determine
              whether the proposal demonstrates potential community benefit
              and whether further development or review is appropriate.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            style={primaryButton}
          >
            Return to the Form
          </button>
        </section>
      </main>
    );
  }

  return (
    <main style={page}>
      <Header />

      {/* HERO */}
      <section style={hero}>
        <div style={eyebrow}>COMMUNITY IDEAS</div>

        <h1 style={heroTitle}>
          Bring Forward
          <br />
          <span style={{ color: "#dfb64f" }}>an Idea.</span>
        </h1>

        <p style={heroText}>
          A good community idea deserves to be heard. You do not need to arrive
          with a finished plan. Tell us what you see, who it could help, and
          what you believe could make a difference.
        </p>
      </section>

      <section style={content}>
        {/* BEFORE YOU BEGIN */}
        <div style={notice}>
          <div style={{ ...eyebrow, marginBottom: "13px" }}>
            BEFORE YOU BEGIN
          </div>

          <h2 style={noticeTitle}>
            GoldTrack supports community advancement.
          </h2>

          <p style={noticeText}>
            GoldTrack Rewards considers ideas intended to provide meaningful
            benefit to a community—not simply private benefit to the people
            requesting assistance.
          </p>

          <p style={noticeText}>
            You do not need official community authorization simply to submit
            an idea. If a proposal advances through review, GoldTrack will
            independently verify required community authority, ownership,
            conflicts of interest, funding requirements, and other safeguards
            before applicable resources are committed.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={form}>
          {/* ABOUT YOU */}
          <FormSection
            number="01"
            title="About You"
            description="Tell us who is bringing the idea forward."
          >
            <div style={twoColumn}>
              <Field label="Your name" required>
                <input required name="name" style={input} />
              </Field>

              <Field label="Email address" required>
                <input required type="email" name="email" style={input} />
              </Field>

              <Field label="Phone number">
                <input type="tel" name="phone" style={input} />
              </Field>

              <Field label="City / State / Region">
                <input name="location" style={input} />
              </Field>
            </div>
          </FormSection>

          {/* COMMUNITY */}
          <FormSection
            number="02"
            title="The Community"
            description="Help us understand who this idea is intended to serve."
          >
            <Field label="What community would this idea benefit?" required>
              <input
                required
                name="community"
                style={input}
                placeholder="Town, neighborhood, school community, rural area, organization, or other community"
              />
            </Field>

            <Field
              label="Who in that community would benefit?"
              required
            >
              <textarea required name="beneficiaries" style={textarea} />
            </Field>
          </FormSection>

          {/* IDEA */}
          <FormSection
            number="03"
            title="The Idea"
            description="It does not have to be perfect. Start with what you see."
          >
            <Field
              label="What problem, need, or opportunity have you identified?"
              required
            >
              <textarea required name="problem" style={textarea} />
            </Field>

            <Field label="What is your idea?" required>
              <textarea required name="idea" style={largeTextarea} />
            </Field>

            <Field label="What do you believe this idea could accomplish?">
              <textarea name="outcome" style={textarea} />
            </Field>
          </FormSection>

          {/* COMMUNITY BENEFIT */}
          <FormSection
            number="04"
            title="Community Benefit"
            description="This is the first test every GoldTrack idea must pass."
          >
            <div style={questionBox}>
              Who does this help beyond the people asking for help?
            </div>

            <Field
              label="Explain how this idea would provide meaningful community benefit."
              required
            >
              <textarea
                required
                name="communityBenefit"
                style={largeTextarea}
              />
            </Field>
          </FormSection>

          {/* ORGANIZATION / SUPPORT */}
          <FormSection
            number="05"
            title="Current Support"
            description="You do not need formal approval to submit an idea."
          >
            <Field label="Are you submitting this idea as:">
              <select name="submitterType" style={input}>
                <option value="">Select one</option>
                <option>Individual community member</option>
                <option>Community group</option>
                <option>Nonprofit organization</option>
                <option>Business or professional organization</option>
                <option>Government or public organization</option>
                <option>Other</option>
              </select>
            </Field>

            <Field label="Organization or group name, if applicable">
              <input name="organization" style={input} />
            </Field>

            <Field label="Do you currently have community or official support for this idea?">
              <select name="communitySupport" style={input}>
                <option value="">Select one</option>
                <option>Yes</option>
                <option>No</option>
                <option>In discussion</option>
                <option>Unsure</option>
              </select>
            </Field>

            <Field label="If yes or in discussion, tell us about that support.">
              <textarea name="supportExplanation" style={textarea} />
            </Field>
          </FormSection>

          {/* INTEREST / ASSETS */}
          <FormSection
            number="06"
            title="Interests & Assets"
            description="Early disclosure helps protect both the community and the idea."
          >
            <Field label="Would you, your organization, family members, business partners, or another related party receive a direct financial or property benefit if this idea were approved?">
              <select name="financialInterest" style={input}>
                <option value="">Select one</option>
                <option>No</option>
                <option>Yes</option>
                <option>Unsure</option>
              </select>
            </Field>

            <Field label="If yes or unsure, please explain.">
              <textarea name="interestExplanation" style={textarea} />
            </Field>

            <Field label="Would the idea involve land, a building, storage facility, permanent improvements, vehicles, machinery, or other significant assets?">
              <select name="assets" style={input}>
                <option value="">Select one</option>
                <option>No</option>
                <option>Yes</option>
                <option>Unsure</option>
              </select>
            </Field>

            <Field label="If yes or unsure, describe the property or assets and who currently owns or controls them.">
              <textarea name="assetExplanation" style={textarea} />
            </Field>
          </FormSection>

          {/* WHAT HELP */}
          <FormSection
            number="07"
            title="What Help Might Be Needed?"
            description="Money is not the only way GoldTrack may be able to help."
          >
            <p style={smallIntro}>
              Select everything you believe might help. GoldTrack may later
              determine that a different combination would give the idea a
              better chance of succeeding.
            </p>

            <div style={checkGrid}>
              {[
                "Counsel or guidance",
                "Professional expertise",
                "Introductions or connections",
                "Planning or development help",
                "Equipment or resources",
                "Funding",
                "Unsure — help me determine what is needed",
              ].map((item) => (
                <label key={item} style={checkItem}>
                  <input type="checkbox" name="helpNeeded" value={item} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </FormSection>

          {/* SUPPORTING INFORMATION */}
          <FormSection
            number="08"
            title="Supporting Information"
            description="Anything else that would help us understand the idea?"
          >
            <Field label="Additional information">
              <textarea name="additionalInformation" style={largeTextarea} />
            </Field>

            <div style={futureUpload}>
              <strong>Supporting documents & photos</strong>

              <p style={{ margin: "7px 0 0", lineHeight: 1.6 }}>
                File uploads will be added when the live submission system is
                connected. Do not send sensitive documents at this stage.
              </p>
            </div>
          </FormSection>

          {/* CERTIFICATION */}
          <FormSection
            number="09"
            title="Certification"
            description="Please confirm the information before submitting."
          >
            <label style={certification}>
              <input type="checkbox" required />

              <span>
                I understand that submitting an idea does not constitute
                approval, funding, or a commitment by GoldTrack Rewards. I
                confirm that the information I have provided is accurate to the
                best of my knowledge and that I have disclosed any known
                personal or financial interest connected with this proposal.
              </span>
            </label>
          </FormSection>

          <div style={submitArea}>
            <button type="submit" style={submitButton}>
              Submit Community Idea
            </button>

            <p style={submitNote}>
              During this design stage, clicking Submit does not transmit or
              store your information.
            </p>

            <div style={closingLine}>
              Every idea matters. Every contribution counts.
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header style={header}>
      <Link href="/" style={brand}>
        GOLDTRACK REWARDS
      </Link>

      <nav style={nav}>
        <Link href="/about" style={navLink}>
          About
        </Link>

        <Link href="/how-it-works" style={navLink}>
          How It Works
        </Link>

        <Link href="/community" style={navLink}>
          Our Community
        </Link>

        <Link href="/initiatives" style={navLink}>
          Initiatives
        </Link>

        <Link href="/transparency" style={navLink}>
          Transparency
        </Link>

        <Link href="/charter" style={navLink}>
          The Charter
        </Link>

        <Link href="/join" style={joinButton}>
          Join / Be Counted
        </Link>
      </nav>
    </header>
  );
}

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section style={formSection}>
      <div style={sectionHeader}>
        <div style={numberCircle}>{number}</div>

        <div>
          <h2 style={sectionTitle}>{title}</h2>
          <p style={sectionDescription}>{description}</p>
        </div>
      </div>

      <div style={fields}>{children}</div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label style={field}>
      <span style={labelStyle}>
        {label}
        {required && <span style={{ color: "#d8ad48" }}> *</span>}
      </span>

      {children}
    </label>
  );
}

/* ---------- STYLES ---------- */

const page: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "linear-gradient(180deg, #071d19 0%, #061713 55%, #04120f 100%)",
  color: "#f4eddb",
  fontFamily: "Georgia, 'Times New Roman', serif",
};

const header: React.CSSProperties = {
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "25px",
  borderBottom: "1px solid rgba(218,178,78,.25)",
};

const brand: React.CSSProperties = {
  color: "#e0b64f",
  fontWeight: 700,
  fontSize: "20px",
  letterSpacing: ".04em",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const nav: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "17px",
};

const navLink: React.CSSProperties = {
  color: "#ddd5c2",
  textDecoration: "none",
  fontSize: "14px",
};

const joinButton: React.CSSProperties = {
  color: "#10221b",
  background: "linear-gradient(180deg,#efd77d,#c79831)",
  padding: "10px 16px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 700,
};

const hero: React.CSSProperties = {
  maxWidth: "920px",
  margin: "0 auto",
  padding: "95px 28px 75px",
  textAlign: "center",
};

const eyebrow: React.CSSProperties = {
  color: "#d6a93d",
  fontSize: "12px",
  letterSpacing: ".21em",
  fontWeight: 700,
};

const heroTitle: React.CSSProperties = {
  margin: "16px 0 24px",
  fontSize: "clamp(48px, 7vw, 76px)",
  lineHeight: 1.03,
  fontWeight: 600,
};

const heroText: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  color: "#d5cfbf",
  fontSize: "20px",
  lineHeight: 1.75,
};

const content: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "0 28px 110px",
};

const notice: React.CSSProperties = {
  padding: "32px",
  marginBottom: "30px",
  border: "1px solid rgba(216,173,67,.48)",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg, rgba(216,173,67,.09), rgba(255,255,255,.025))",
};

const noticeTitle: React.CSSProperties = {
  margin: "0 0 14px",
  color: "#f0d88e",
  fontSize: "27px",
};

const noticeText: React.CSSProperties = {
  color: "#d7d1c1",
  lineHeight: 1.75,
  fontSize: "16px",
};

const form: React.CSSProperties = {
  display: "grid",
  gap: "22px",
};

const formSection: React.CSSProperties = {
  padding: "34px",
  border: "1px solid rgba(218,178,78,.25)",
  borderRadius: "14px",
  background: "rgba(255,255,255,.025)",
};

const sectionHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
  marginBottom: "28px",
  paddingBottom: "22px",
  borderBottom: "1px solid rgba(218,178,78,.18)",
};

const numberCircle: React.CSSProperties = {
  width: "52px",
  height: "52px",
  flex: "0 0 52px",
  borderRadius: "50%",
  border: "1px solid rgba(216,173,67,.55)",
  color: "#e1b74f",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
};

const sectionTitle: React.CSSProperties = {
  margin: 0,
  color: "#f0d895",
  fontSize: "27px",
};

const sectionDescription: React.CSSProperties = {
  margin: "6px 0 0",
  color: "#aead9f",
  lineHeight: 1.5,
};

const fields: React.CSSProperties = {
  display: "grid",
  gap: "23px",
};

const twoColumn: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const field: React.CSSProperties = {
  display: "grid",
  gap: "9px",
};

const labelStyle: React.CSSProperties = {
  color: "#eee4cc",
  fontSize: "15px",
  lineHeight: 1.55,
};

const input: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid rgba(220,184,91,.28)",
  borderRadius: "8px",
  background: "#071813",
  color: "#f4eddb",
  padding: "13px 14px",
  fontSize: "16px",
  fontFamily: "inherit",
  outline: "none",
};

const textarea: React.CSSProperties = {
  ...input,
  minHeight: "115px",
  resize: "vertical",
};

const largeTextarea: React.CSSProperties = {
  ...input,
  minHeight: "165px",
  resize: "vertical",
};

const questionBox: React.CSSProperties = {
  borderLeft: "3px solid #d5a83e",
  padding: "17px 20px",
  background: "rgba(0,0,0,.17)",
  color: "#f0cf70",
  fontSize: "19px",
  fontStyle: "italic",
};

const smallIntro: React.CSSProperties = {
  margin: 0,
  color: "#c9c4b6",
  lineHeight: 1.7,
};

const checkGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "12px",
};

const checkItem: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  padding: "14px",
  border: "1px solid rgba(218,178,78,.18)",
  borderRadius: "8px",
  background: "rgba(0,0,0,.12)",
  color: "#ddd7c7",
  lineHeight: 1.45,
};

const futureUpload: React.CSSProperties = {
  padding: "20px",
  border: "1px dashed rgba(218,178,78,.4)",
  borderRadius: "9px",
  color: "#bdb8a9",
};

const certification: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "13px",
  color: "#ddd6c6",
  lineHeight: 1.7,
};

const submitArea: React.CSSProperties = {
  padding: "35px 10px 10px",
  textAlign: "center",
};

const submitButton: React.CSSProperties = {
  border: "none",
  borderRadius: "9px",
  padding: "16px 30px",
  background: "linear-gradient(180deg,#efd77d,#c79831)",
  color: "#10221b",
  fontFamily: "inherit",
  fontSize: "17px",
  fontWeight: 700,
  cursor: "pointer",
};

const submitNote: React.CSSProperties = {
  margin: "16px auto 0",
  maxWidth: "600px",
  color: "#8f938a",
  fontSize: "13px",
  lineHeight: 1.6,
};

const closingLine: React.CSSProperties = {
  marginTop: "40px",
  color: "#dfbd68",
  fontSize: "20px",
  fontStyle: "italic",
};

const successSection: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "140px 28px",
  textAlign: "center",
};

const successTitle: React.CSSProperties = {
  margin: "18px 0",
  fontSize: "48px",
  color: "#f2e2b4",
};

const successText: React.CSSProperties = {
  color: "#cfc9ba",
  lineHeight: 1.7,
  fontSize: "18px",
};

const successBox: React.CSSProperties = {
  margin: "30px 0",
  padding: "25px",
  border: "1px solid rgba(218,178,78,.35)",
  borderRadius: "12px",
  background: "rgba(255,255,255,.025)",
  color: "#cbc5b7",
  textAlign: "left",
};

const primaryButton: React.CSSProperties = {
  border: "none",
  borderRadius: "8px",
  padding: "14px 23px",
  background: "linear-gradient(180deg,#efd77d,#c79831)",
  color: "#10221b",
  fontFamily: "inherit",
  fontWeight: 700,
  cursor: "pointer",
};