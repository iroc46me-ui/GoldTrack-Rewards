  "use client";
  import Link from "next/link";
import { useState } from "react";
  const choices = [
    {
      title: "Learn and Observe",
      text: "Follow the growth of the community, explore ideas, and stay informed.",
    },
    {
      title: "Build Projects",
      text: "Turn ideas into action. Hel  p develop programs, solutions, and initiatives that create impact.",
    },
    {
      title: "Encourage Others",
      text: "A kind word or positive perspective can strengthen and uplift our community.",
    },
    {
      title: "Technical Development",
      text: "Design, code, test, document, or support technical systems that help us grow.",
    },
    {
      title: "Share Ideas",
      text: "New ideas often lead to new opportunities. Share your thoughts and perspectives.",
    },
    {
      title: "Stewardship",
      text: "Help preserve, maintain, improve, and protect what has been built for future generations.",
    },
    {
      title: "Help Organize",
      text: "Connect people, projects, and resources. Help coordinate initiatives in your area.",
    },
    {
      title: "Other",
      text: "There may be ways to contribute that have not yet been imagined. Tell us how you can help.",
    },
  ];

  export default function JoinPage() {
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formElement = event.currentTarget;
  const form = new FormData(formElement);

    const data = {
      displayName: String(form.get("displayName") || ""),
      email: String(form.get("email") || ""),
      countryRegion: String(form.get("country") || ""),
      participation: form.getAll("participation").map(String),
      reasonForJoining: String(form.get("message") || ""),
      commitmentAccepted: form.get("commitment") === "on",
    };

    setSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/community-members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setSubmitMessage(result.error || "Unable to save your submission.");
        return;
      }

      setSubmitMessage("You have been counted. Welcome to the community.");
      formElement.reset();
    } catch (error) {
  console.error("Join form fetch failed:", error);

  setSubmitMessage(
    error instanceof Error
      ? error.message
      : "Unable to connect. Please try again."
  );
} finally {
      setSubmitting(false);
    } 
  }

  return (
      <main className="page">
        
        <div className="canvas">
          <img
            className="background"
            src="/join-our-community.png"
            alt=""
            draggable={false}
          />

          {/* HEADER */}
          <header className="header">
            <Link href="/" className="gtrLogo">
              <span>GTR</span>
            </Link>

            <nav className="topNav">
              <Link href="/about">About</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/charter">The Charter</Link>
              <Link href="/community">Our Community</Link>
              <Link href="/transparency">Transparency</Link>
              <Link href="/initiatives">Initiatives</Link>
              <Link href="/news">News</Link>
            </nav>

            <Link href="/join" className="joinTop">
              👥 &nbsp; Join / Be Counted
            </Link>
          </header>

          {/* HERO */}
          <section className="hero">
            <h1>Join Our Community</h1>
            <h2>Be Counted</h2>

            <svg
  className="heroCopySvg"
  viewBox="0 0 560 88"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="18"
    fill="#34483f"
    fontFamily="Arial, sans-serif"
    fontSize="15"
    fontWeight="700"
  >
    <tspan x="0" dy="0">
      Every community begins with a single choice.
    </tspan>

    <tspan x="0" dy="20">
      When you choose to be counted, you become part of
    </tspan>

    <tspan x="0" dy="20">
      the ongoing story of GoldTrack Rewards.
    </tspan>

    <tspan x="0" dy="20">
      Together, we can create lasting impac.
    </tspan>
  </text>
</svg>
          </section>

          {/* LEFT COLUMN */}
          <form onSubmit={handleSubmit}>
          <section className="aboutYou">
           <svg
  className="sectionHeadingSvg"
  viewBox="0 0 520 36"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="26"
    fill="#4b3518"
    fontFamily='Georgia, "Times New Roman", serif'
    fontSize="22"
    fontWeight="800"
  >
    ♟  Tell Us About Yourself
  </text>
</svg>

            <div className="twoInputs">
              <input name="displayName" placeholder="♟   Display Name" />
              <input
                name="email"
                type="email"
                placeholder="✉   Email Address"
              />
            </div>

            <select
  name="country"
  className="country countrySelect"
  defaultValue="United States"
>
  <option value="United States">United States</option>
  <option value="Canada">Canada</option>
  <option value="Mexico">Mexico</option>
  <option value="United Kingdom">United Kingdom</option>
  <option value="Australia">Australia</option>
  <option value="New Zealand">New Zealand</option>

  <option value="Afghanistan">Afghanistan</option>
  <option value="Albania">Albania</option>
  <option value="Algeria">Algeria</option>
  <option value="Andorra">Andorra</option>
  <option value="Angola">Angola</option>
  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
  <option value="Argentina">Argentina</option>
  <option value="Armenia">Armenia</option>
  <option value="Austria">Austria</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Bahamas">Bahamas</option>
  <option value="Bahrain">Bahrain</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Barbados">Barbados</option>
  <option value="Belarus">Belarus</option>
  <option value="Belgium">Belgium</option>
  <option value="Belize">Belize</option>
  <option value="Benin">Benin</option>
  <option value="Bhutan">Bhutan</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
  <option value="Botswana">Botswana</option>
  <option value="Brazil">Brazil</option>
  <option value="Brunei">Brunei</option>
  <option value="Bulgaria">Bulgaria</option>
  <option value="Burkina Faso">Burkina Faso</option>
  <option value="Burundi">Burundi</option>
  <option value="Cabo Verde">Cabo Verde</option>
  <option value="Cambodia">Cambodia</option>
  <option value="Cameroon">Cameroon</option>
  <option value="Central African Republic">Central African Republic</option>
  <option value="Chad">Chad</option>
  <option value="Chile">Chile</option>
  <option value="China">China</option>
  <option value="Colombia">Colombia</option>
  <option value="Comoros">Comoros</option>
  <option value="Costa Rica">Costa Rica</option>
  <option value="Croatia">Croatia</option>
  <option value="Cuba">Cuba</option>
  <option value="Cyprus">Cyprus</option>
  <option value="Czechia">Czechia</option>
  <option value="Democratic Republic of the Congo">
    Democratic Republic of the Congo
  </option>
  <option value="Denmark">Denmark</option>
  <option value="Djibouti">Djibouti</option>
  <option value="Dominica">Dominica</option>
  <option value="Dominican Republic">Dominican Republic</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Egypt">Egypt</option>
  <option value="El Salvador">El Salvador</option>
  <option value="Equatorial Guinea">Equatorial Guinea</option>
  <option value="Eritrea">Eritrea</option>
  <option value="Estonia">Estonia</option>
  <option value="Eswatini">Eswatini</option>
  <option value="Ethiopia">Ethiopia</option>
  <option value="Fiji">Fiji</option>
  <option value="Finland">Finland</option>
  <option value="France">France</option>
  <option value="Gabon">Gabon</option>
  <option value="Gambia">Gambia</option>
  <option value="Georgia">Georgia</option>
  <option value="Germany">Germany</option>
  <option value="Ghana">Ghana</option>
  <option value="Greece">Greece</option>
  <option value="Grenada">Grenada</option>
  <option value="Guatemala">Guatemala</option>
  <option value="Guinea">Guinea</option>
  <option value="Guinea-Bissau">Guinea-Bissau</option>
  <option value="Guyana">Guyana</option>
  <option value="Haiti">Haiti</option>
  <option value="Honduras">Honduras</option>
  <option value="Hungary">Hungary</option>
  <option value="Iceland">Iceland</option>
  <option value="India">India</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Iran">Iran</option>
  <option value="Iraq">Iraq</option>
  <option value="Ireland">Ireland</option>
  <option value="Israel">Israel</option>
  <option value="Italy">Italy</option>
  <option value="Ivory Coast">Ivory Coast</option>
  <option value="Jamaica">Jamaica</option>
  <option value="Japan">Japan</option>
  <option value="Jordan">Jordan</option>
  <option value="Kazakhstan">Kazakhstan</option>
  <option value="Kenya">Kenya</option>
  <option value="Kiribati">Kiribati</option>
  <option value="Kuwait">Kuwait</option>
  <option value="Kyrgyzstan">Kyrgyzstan</option>
  <option value="Laos">Laos</option>
  <option value="Latvia">Latvia</option>
  <option value="Lebanon">Lebanon</option>
  <option value="Lesotho">Lesotho</option>
  <option value="Liberia">Liberia</option>
  <option value="Libya">Libya</option>
  <option value="Liechtenstein">Liechtenstein</option>
  <option value="Lithuania">Lithuania</option>
  <option value="Luxembourg">Luxembourg</option>
  <option value="Madagascar">Madagascar</option>
  <option value="Malawi">Malawi</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Maldives">Maldives</option>
  <option value="Mali">Mali</option>
  <option value="Malta">Malta</option>
  <option value="Marshall Islands">Marshall Islands</option>
  <option value="Mauritania">Mauritania</option>
  <option value="Mauritius">Mauritius</option>
  <option value="Micronesia">Micronesia</option>
  <option value="Moldova">Moldova</option>
  <option value="Monaco">Monaco</option>
  <option value="Mongolia">Mongolia</option>
  <option value="Montenegro">Montenegro</option>
  <option value="Morocco">Morocco</option>
  <option value="Mozambique">Mozambique</option>
  <option value="Myanmar">Myanmar</option>
  <option value="Namibia">Namibia</option>
  <option value="Nauru">Nauru</option>
  <option value="Nepal">Nepal</option>
  <option value="Netherlands">Netherlands</option>
  <option value="Nicaragua">Nicaragua</option>
  <option value="Niger">Niger</option>
  <option value="Nigeria">Nigeria</option>
  <option value="North Korea">North Korea</option>
  <option value="North Macedonia">North Macedonia</option>
  <option value="Norway">Norway</option>
  <option value="Oman">Oman</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Palau">Palau</option>
  <option value="Panama">Panama</option>
  <option value="Papua New Guinea">Papua New Guinea</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Philippines">Philippines</option>
  <option value="Poland">Poland</option>
  <option value="Portugal">Portugal</option>
  <option value="Qatar">Qatar</option>
  <option value="Republic of the Congo">Republic of the Congo</option>
  <option value="Romania">Romania</option>
  <option value="Russia">Russia</option>
  <option value="Rwanda">Rwanda</option>
  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
  <option value="Saint Lucia">Saint Lucia</option>
  <option value="Saint Vincent and the Grenadines">
    Saint Vincent and the Grenadines
  </option>
  <option value="Samoa">Samoa</option>
  <option value="San Marino">San Marino</option>
  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
  <option value="Saudi Arabia">Saudi Arabia</option>
  <option value="Senegal">Senegal</option>
  <option value="Serbia">Serbia</option>
  <option value="Seychelles">Seychelles</option>
  <option value="Sierra Leone">Sierra Leone</option>
  <option value="Singapore">Singapore</option>
  <option value="Slovakia">Slovakia</option>
  <option value="Slovenia">Slovenia</option>
  <option value="Solomon Islands">Solomon Islands</option>
  <option value="Somalia">Somalia</option>
  <option value="South Africa">South Africa</option>
  <option value="South Korea">South Korea</option>
  <option value="South Sudan">South Sudan</option>
  <option value="Spain">Spain</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="Sudan">Sudan</option>
  <option value="Suriname">Suriname</option>
  <option value="Sweden">Sweden</option>
  <option value="Switzerland">Switzerland</option>
  <option value="Syria">Syria</option>
  <option value="Tajikistan">Tajikistan</option>
  <option value="Tanzania">Tanzania</option>
  <option value="Thailand">Thailand</option>
  <option value="Timor-Leste">Timor-Leste</option>
  <option value="Togo">Togo</option>
  <option value="Tonga">Tonga</option>
  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
  <option value="Tunisia">Tunisia</option>
  <option value="Turkey">Turkey</option>
  <option value="Turkmenistan">Turkmenistan</option>
  <option value="Tuvalu">Tuvalu</option>
  <option value="Uganda">Uganda</option>
  <option value="Ukraine">Ukraine</option>
  <option value="United Arab Emirates">United Arab Emirates</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Uzbekistan">Uzbekistan</option>
  <option value="Vanuatu">Vanuatu</option>
  <option value="Vatican City">Vatican City</option>
  <option value="Venezuela">Venezuela</option>
  <option value="Vietnam">Vietnam</option>
  <option value="Yemen">Yemen</option>
  <option value="Zambia">Zambia</option>
  <option value="Zimbabwe">Zimbabwe</option>
</select>
          </section>

          <section className="participate">
            <svg
  className="sectionHeadingSvg"
  viewBox="0 0 600 36"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="26"
    fill="#4b3518"
    fontFamily='Georgia, "Times New Roman", serif'
    fontSize="22"
    fontWeight="800"
  >
    👥  How Would You Like to Participate?
  </text>
</svg>

            <div className="choiceGrid">
              {choices.map((choice) => (
                <label className="choice" key={choice.title}>
                  <input
  type="checkbox"
  name="participation"
  value={choice.title}
/>

                  <span className="choiceIcon">◇</span>

                  <span className="choiceCopy">
                    <strong>{choice.title}</strong>
                    <small>{choice.text}</small>
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* CENTER RIGHT */}
          <section className="why">
            <svg
  className="sectionHeadingSvg"
  viewBox="0 0 600 36"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="26"
    fill="#4b3518"
    fontFamily='Georgia, "Times New Roman", serif'
    fontSize="22"
    fontWeight="800"
  >
    💬  Why Do You Want to Be Counted?
  </text>
</svg>

            <svg
  className="whyCopySvg"
  viewBox="0 0 600 50"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="18"
    fill="#34483f"
    fontFamily='Arial, sans-serif'
    fontSize="15"
    fontWeight="700"
  >
    <tspan x="0" dy="0">
      Your story matters. Share in a few words what inspires you to join
    </tspan>
    <tspan x="0" dy="20">
      and how you hope to contribute to our mission.
    </tspan>
  </text>
</svg>


            <textarea
              name="message"
              maxLength={500}
              placeholder="Write your message here..."
            />

            <small>0/500 characters</small>
          </section>

          <section className="commitment">
            <svg
  className="sectionHeadingSvg"
  viewBox="0 0 520 36"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="26"
    fill="#4b3518"
    fontFamily='Georgia, "Times New Roman", serif'
    fontSize="22"
    fontWeight="800"
  >
    ◈  Community Commitment
  </text>
</svg>   

            <svg
  className="commitmentCopySvg"
  viewBox="0 0 500 32"
  preserveAspectRatio="xMinYMid meet"
>
  <text
    x="0"
    y="21"
    fill="#34483f"
    fontFamily="Arial, sans-serif"
    fontSize="15"
    fontWeight="700"
  >
    We build this community on shared values.
  </text>
</svg>

            <div className="values">
              <article>
                <b>♡</b>
                <svg className="valueCopySvg" viewBox="0 0 140 42">
  <text
    x="70"
    y="16"
    textAnchor="middle"
    fill="#34483f"
    fontFamily="Arial, sans-serif"
    fontSize="13"
    fontWeight="700"
  >
    <tspan x="70" dy="0">Mission</tspan>
    <tspan x="70" dy="16">before ego.</tspan>
  </text>
</svg>
              </article>

              <article>
                <b>♧</b>
                <svg className="valueCopySvg" viewBox="0 0 140 42">
  <text
    x="70"
    y="16"
    textAnchor="middle"
    fill="#34483f"
    fontFamily="Arial, sans-serif"
    fontSize="13"
    fontWeight="700"
  >
    <tspan x="70" dy="0">Transparency</tspan>
    <tspan x="70" dy="16">over convenience.</tspan>
  </text>
</svg>
              </article>

              <article>
                <b>♧</b>
                <svg className="valueCopySvg" viewBox="0 0 140 42">
  <text
    x="70"
    y="16"
    textAnchor="middle"
    fill="#34483f"
    fontFamily="Arial, sans-serif"
    fontSize="13"
    fontWeight="700"
  >
    <tspan x="70" dy="0">Stewardship</tspan>
    <tspan x="70" dy="16">over extraction.</tspan>
  </text>
</svg>
              </article>

              <article>
                <b>◎</b>
                <span>
                  Participation
                  <br />
                  over exclusion.
                </span>
              </article>
            </div>

            <label className="agreement">
  <input type="checkbox"
  name="commitment"
  />

  <svg
    className="agreementCopySvg"
    viewBox="0 0 430 28"
    preserveAspectRatio="xMinYMid meet"
  >
    <text
      x="0"
      y="19"
      fill="#34483f"
      fontFamily="Arial, sans-serif"
      fontSize="14"
      fontWeight="700"
    >
      I understand and support this commitment.
    </text>
  </svg>
</label>
          </section>

          {/* RIGHT RECORD PANEL */}
          <aside className="record">
            <div className="recordSymbol">▥</div>

            <h3>
              You Become Part of
              <br />
              Our Community
            </h3>

            <p>
              Your personal information remains protected according to your
              preferences and applicable policies.
            </p>

            <p>
              However, your participation may become part of the historical
              record of our community through anonymous counts, milestones,
              archives, and stewardship records.
            </p>

            <p>
              Future generations may never
              <br />
              know your name.
            </p>

            <strong>
              But they may know
              <br />
              that you were here.
            </strong>
          </aside>

          {/* LOWER STRIP */}
          <section className="lowerLeft">
            <div className="roundIcon">👥</div>

            <div>
              <strong>There is no wrong way to participate.</strong>
              <p>
                Choose the path that best reflects how
                <br />
                you would like to contribute.
              </p>
            </div>
          </section>

          <section className="beCounted">
            <button type="submit" disabled={submitting}>
  👥 &nbsp; {submitting ? "Submitting..." : "Be Counted"}
</button>
<button
  type="reset"
  className="clearButton"
  onClick={() => setSubmitMessage("")}
>
  Clear Form
</button>
{submitMessage && (
  <div className="submitMessage">
    {submitMessage}
  </div>
)}

            <strong>Join the Community Today</strong>
          </section>
</form>
          <section className="lowerRight">
            <p>Every honest contribution matters.</p>

            <strong>
              You Matter. You Can Help.
              <br />
              So Be Counted.
            </strong>
          </section>

          {/* FOOTER */}
          <footer className="footer">
            <Link href="/" className="footerLogo">
              GTR
            </Link>

            <span className="quote">
              “The test of all things is time.” — Solon
            </span>

            <nav>
              <Link href="/about">About</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/charter">The Charter</Link>
              <Link href="/community">Our Community</Link>
              <Link href="/transparency">Transparency</Link>
              <Link href="/initiatives">Initiatives</Link>
              <Link href="/news">News</Link>
            </nav>

            <span className="copyright">
              © 2026 GoldTrack Rewards. All rights reserved.
            </span>
          </footer>
        </div>

        <style>{`
          * {
            box-sizing: border-box;
          }

          .page {
            margin: 0;
            min-height: 100vh;
            padding: 18px 0 30px;
            background: #111;
          }

          .canvas {
            position: relative;
            width: min(97vw, 1536px);
            aspect-ratio: 3 / 2;
            margin: 0 auto;
            overflow: hidden;
            container-type: inline-size;
            font-family: Georgia, "Times New Roman", serif;
            color: #123b31;
          }

          .background {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: fill;
            z-index: 0;
            pointer-events: none;
          }

          .canvas a {
            text-decoration: none;
          }

          /* HEADER */

          .header {
            position: absolute;
            z-index: 5;
            left: 4%;
            top: 2.1%;
            width: 92%;
            height: 8%;
          }

          .gtrLogo {
            position: absolute;
            left: 0;
            top: 0;
            width: 7cqw;
            height: 7cqw;
            border-radius: 50%;
            border: .3cqw solid #b67b16;
            background: #06483a;
            box-shadow: 0 .2cqw .5cqw rgba(0,0,0,.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #dfac35;
            font-size: 2cqw;
            font-weight: 800;
          }

          .topNav {
            position: absolute;
            left: 19%;
            top: 25%;
            width: 55%;
            display: flex;
            justify-content: space-between;
          }

          .topNav a {
            font-family: Arial, sans-serif;
            color: #183a31;
            font-size: .92cqw;
            font-weight: 700;
            white-space: nowrap;
          }

          .joinTop {
            position: absolute;
            right: 0;
            top: 5%;
            background: #06483a;
            border: .16cqw solid #b77a18;
            border-radius: .45cqw;
            color: #f5df9b;
            padding: .8cqw 1.6cqw;
            font-size: .95cqw;
            font-weight: 800;
          }

          /* HERO */

          .hero {
            position: absolute;
            z-index: 4;
            left: 13.4%;
            top: 11.5%;
            width: 31%;
          }

          .hero h1 {
            margin: 0;
            color: #123e33;
            font-size: 3.2cqw;
            line-height: .98;
          }

          .hero h2 {
            margin: .15cqw 0 1cqw;
            color: #a46a18;
            font-size: 2.35cqw;
            line-height: 1;
          }

          .hero p {
            margin: 0;
            font-family: Arial, sans-serif;
            color: #172d27;
            font-size: 1.05cqw;
            line-height: 1.42;
            font-weight: 600;
          }

          /* GENERAL */

          .aboutYou h3,
          .participate h3,
          .why h3,
          .commitment h3 {
            margin: 0 0 .55cqw;
            color: #123c32;
            font-size: 1.26cqw;
            line-height: 1.1;
          }

          /* ABOUT YOU */

          .aboutYou {
            position: absolute;
            z-index: 5;
            left: 7%;
            top: 34%;
            width: 39%;
          }

          .twoInputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .8cqw;
          }

          .aboutYou input,
          .why textarea {
            width: 100%;
            border: .08cqw solid #a9a296;
            border-radius: .35cqw;
            background: rgba(255,255,255,.82);
            color: #273831;
            font-family: Arial, sans-serif;
            font-size: .93cqw;
            outline: none;
          }

          .aboutYou input {
            height: 2.55cqw;
            padding: .55cqw .75cqw;
          }

          .country {
            margin-top: .65cqw;
          }

          /* PARTICIPATION */

          .participate {
            position: absolute;
            z-index: 5;
            left: 5.3%;
            top: 46%;
            width: 42.5%;
          }

          .choiceGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .45cqw .55cqw;
          }

          .choice {
            min-height: 4.2cqw;
            display: grid;
            grid-template-columns: 1.1cqw 2.3cqw 1fr;
            align-items: center;
            gap: .45cqw;
            padding: .48cqw .6cqw;
            background: rgba(247,242,227,.9);
            border: .08cqw solid #bcb3a3;
            border-radius: .35cqw;
            color: #153a30;
          }

          .choice > input {
            width: 1cqw;
            height: 1cqw;
          }

          .choiceIcon {
            font-size: 1.8cqw;
            text-align: center;
            color: #123e33;
          }

          .choiceCopy strong {
            display: block;
            font-family: Arial, sans-serif;
            font-size: .88cqw;
            font-weight: 800;
            margin-bottom: .18cqw;
          }

          .choiceCopy small {
            display: block;
            font-family: Arial, sans-serif;
            font-size: .66cqw;
            line-height: 1.27;
            color: #24362f;
          }

          /* WHY */

          .why {
            position: absolute;
            z-index: 5;
            left: 48.5%;
            top: 38%;
            width: 30%;
          }

          .why p {
            margin: 0 0 .6cqw;
            font-family: Arial, sans-serif;
            font-size: .86cqw;
            line-height: 1.35;
            color: #1f322b;
            font-weight: 600;
          }

          .why textarea {
            height: 7.3cqw;
            padding: .7cqw;
            resize: none;
          }

          .why small {
            display: block;
            margin-top: .3cqw;
            font-family: Arial, sans-serif;
            font-size: .65cqw;
            color: #48534e;
          }

          /* COMMITMENT */

          .commitment {
            position: absolute;
            z-index: 5;
            left: 48.5%;
            top: 59.5%;
            width: 30%;
          }

          .commitment > p {
            margin: -.1cqw 0 1cqw 2cqw;
            font-family: Arial, sans-serif;
            font-size: .78cqw;
            color: #24372f;
            font-weight: 600;
          }

          .values {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            text-align: center;
            gap: .6cqw;
          }

          .values b {
            display: block;
            color: #06483a;
            font-size: 2cqw;
            line-height: 1;
            margin-bottom: .35cqw;
          }

          .values span {
            font-family: Arial, sans-serif;
            font-size: .71cqw;
            line-height: 1.25;
            color: #172f28;
          }

          .agreement {
            display: flex;
            align-items: center;
            gap: .5cqw;
            margin-top: 1.1cqw;
            font-family: Arial, sans-serif;
            color: #20352d;
            font-size: .8cqw;
            font-weight: 600;
          }

          .agreement input {
            width: 1cqw;
            height: 1cqw;
          }

          /* RIGHT PANEL */

          .record {
            position: absolute;
            z-index: 5;
            left: 79.2%;
            top: 36%;
            width: 17.5%;
            height: 51%;
            padding: 2.4cqw 1.4cqw;
            border: .1cqw solid #b27a1b;
            border-radius: 1cqw;
            background: rgba(249,243,222,.94);
            text-align: center;
            box-shadow: 0 .25cqw .8cqw rgba(0,0,0,.18);
          }

          .recordSymbol {
            width: 2.8cqw;
            height: 2.8cqw;
            margin: -1.1cqw auto .6cqw;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #06483a;
            border: .16cqw solid #b77b19;
            color: #e1ad38;
            font-size: 1.3cqw;
          }

          .record h3 {
            margin: 0 0 1cqw;
            color: #123b31;
            font-size: 1.5cqw;
            line-height: 1.05;
          }

          .record p {
            margin: 0 0 1.1cqw;
            font-family: Arial, sans-serif;
            font-size: .75cqw;
            line-height: 1.42;
            color: #24362f;
            font-weight: 600;
          }

          .record strong {
            color: #a76b19;
            font-size: 1.05cqw;
            line-height: 1.25;
          }

          /* LOWER */

          .lowerLeft {
            position: absolute;
            z-index: 5;
            left: 15%;
            top: 80.7%;
            width: 24%;
            display: flex;
            align-items: center;
            gap: 1cqw;
          }

          .roundIcon {
            flex: 0 0 auto;
            width: 3.4cqw;
            height: 3.4cqw;
            border-radius: 50%;
            border: .16cqw solid #b57917;
            background: rgba(255,255,255,.8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5cqw;
          }

          .lowerLeft strong {
            font-size: .8cqw;
            color: #17372f;
          }

          .lowerLeft p {
            margin: .2cqw 0 0;
            font-family: Arial, sans-serif;
            font-size: .72cqw;
            line-height: 1.3;
            color: #24362f;
          }

          .beCounted {

            position: absolute;
            z-index: 6;
            left: 39%;
            top: 79.9%;
            width: 18%;
            text-align: center;
          }

          .beCounted button {
            width: 100%;
            height: 4.1cqw;
            border: .16cqw solid #b17617;
            border-radius: .45cqw;
            background: #06483a;
            color: #f8e3aa;
            font-family: Georgia, serif;
            font-size: 1.55cqw;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 .22cqw .55cqw rgba(0,0,0,.3);
          }

          .beCounted > strong {
            display: block;
            margin-top: .55cqw;
            font-size: .78cqw;
            color: #162f29;
          }

          .lowerRight {
            position: absolute;
            z-index: 5;
            left: 58%;
            top: 81%;
            width: 17%;
            text-align: center;
          }

          .lowerRight p {
            margin: 0;
            font-family: Arial, sans-serif;
            font-size: .72cqw;
            font-weight: 600;
            color: #23372f;
          }

          .lowerRight strong {
            display: block;
            margin-top: .3cqw;
            color: #a66b19;
            font-size: 1.1cqw;
            line-height: 1.25;
          }

          /* FOOTER */

          .footer {
            position: absolute;
            z-index: 5;
            left: 4%;
            bottom: 1.8%;
            width: 92%;
            height: 7%;
            display: flex;
            align-items: center;
          }

          .footerLogo {
            width: 4.3cqw;
            height: 4.3cqw;
            border-radius: 50%;
            border: .16cqw solid #b27819;
            background: #06483a;
            color: #e0ae3a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1cqw;
            font-weight: 800;
          }

          .quote {
            margin-left: 1.8cqw;
            color: #e7ba4c;
            font-size: .75cqw;
            font-style: italic;
            font-weight: 700;
          }

          .footer nav {
            display: flex;
            gap: 1.3cqw;
            margin-left: auto;
          }

          .footer nav a {
            color: #f6e9bf;
            font-family: Arial, sans-serif;
            font-size: .56cqw;
            font-weight: 600;
          }

          .copyright {
            margin-left: 2cqw;
            font-family: Arial, sans-serif;
            color: #f6e9bf;
            font-size: .52cqw;
          }

          input:focus,
          textarea:focus {
            border-color: #b27819;
            box-shadow: 0 0 0 .12cqw rgba(178,120,25,.22);
          }

          .beCounted button:hover,
          .joinTop:hover {
            filter: brightness(1.1);
          }
            /* =========================================================
   JOIN PAGE — FINAL PAGE-SPECIFIC STYLING
========================================================= */

/* HERO */
.hero {
  top: 11.5%;
  width: 34%;
}

.hero h1 {
  color: #123e33;
  font-size: 3cqw;
  line-height: .98;
  font-weight: 800;
}

.hero h2 {
  color: #a46a18;
  font-size: 2.3cqw;
}

.hero p {
  color: #293b33;
  font-size: 1.08cqw;
  line-height: 1.4;
  font-weight: 700;
}

/* SECTION HEADINGS */
.aboutYou h3,
.participate h3,
.why h3,
.commitment h3 {
  color: #4b3518;
  font-size: 1.35cqw;
  line-height: 1.1;
  font-weight: 800;
}

/* INPUTS */
.aboutYou input,
.why textarea {
  background: #302e29;
  color: #f3ead1;
  border-color: #6d6455;
  font-size: .95cqw;
}

.aboutYou input::placeholder,
.why textarea::placeholder {
  color: #d2cbbd;
  opacity: 1;
}

/* PARTICIPATION CARDS */
.choice {
  background: rgba(43, 41, 35, .96);
  border-color: #746b5b;
  color: #f5ecd4;
}

.choiceCopy strong {
  color: #efe4bd;
  font-size: .94cqw;
  font-weight: 800;
}

.choiceCopy small {
  color: #f4f0df;
  font-size: .68cqw;
  line-height: 1.3;
}

.choiceIcon {
  color: #d8ad42;
}

/* WHY */
.why > p {
  color: #35483f;
  font-size: .92cqw;
  font-weight: 700;
}

.why small {
  color: #59675f;
  font-size: .7cqw;
}

/* COMMITMENT */
.commitment > p {
  color: #35483f;
  font-size: .86cqw;
  font-weight: 700;
}

.values b {
  color: #12604e;
}

.values span {
  color: #30463d;
  font-size: .76cqw;
  font-weight: 700;
}

.agreement {
  color: #30463d;
  font-size: .85cqw;
  font-weight: 800;
}

/* RIGHT RECORD PANEL */
.record {
  background: rgba(43, 40, 29, .96);
}

.record h3 {
  color: #f0e5bd;
}

.record p {
  color: #fff7df;
}

.record strong {
  color: #dfa337;
}

/* LOWER PHOTO AREA */
.lowerLeft strong,
.lowerLeft p,
.lowerRight p {
  color: #fff5d8;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}

.lowerRight strong {
  color: #e5a335;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}
  .sectionHeadingSvg {
  display: block;
  width: 100%;
  height: 2.3cqw;
  margin: 0 0 .45cqw;
  overflow: visible;
}
  .whyCopySvg {
  display: block;
  width: 100%;
  height: 3cqw;
  margin: 0 0 .35cqw;
  overflow: visible;
}
  .commitmentCopySvg {
  display: block;
  width: 100%;
  height: 2.2cqw;
  margin: 0 0 .55cqw 2cqw;
  overflow: visible;
}
  .valueCopySvg {
  display: block;
  width: 100%;
  height: 2.7cqw;
  overflow: visible;
}

.agreementCopySvg {
  display: block;
  width: 100%;
  height: 1.8cqw;
  overflow: visible;
}
  .heroCopySvg {
  display: block;
  width: 100%;
  height: 5.2cqw;
  margin-top: .5cqw;
  overflow: visible;
}
  .submitMessage {
  margin-top: .45cqw;
  font-family: Arial, sans-serif;
  font-size: .72cqw;
  font-weight: 700;
  color: #f5e3a8;
  text-shadow: 0 1px 3px rgba(0,0,0,.8);
}
  .clearButton {
  width: auto !important;
  height: auto !important;
  margin-top: .45cqw;
  padding: .38cqw 1.15cqw !important;
  font-family: Arial, sans-serif !important;
  font-size: .68cqw !important;
  font-weight: 700 !important;
  color: #f5df9b !important;
  background: rgba(6, 72, 58, .82) !important;
  border: .08cqw solid #b17617 !important;
  border-radius: .3cqw !important;
  box-shadow: none !important;
}
  .countrySelect {
  width: 100%;
  height: 2.55cqw;
  margin-top: .65cqw;
  padding: .55cqw .75cqw;
  border: .08cqw solid #6d6455;
  border-radius: .35cqw;
  background: #302e29;
  color: #f3ead1;
  font-family: Arial, sans-serif;
  font-size: .93cqw;
  outline: none;
  cursor: pointer;
}
        `}</style>
      </main>
    );
  }