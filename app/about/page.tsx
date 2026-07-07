export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50">

      <section className="max-w-7xl mx-auto px-8 py-16 text-center">

        <h1 className="text-6xl font-serif font-bold text-slate-900">
          ABOUT GOLDTRACK REWARDS
        </h1>

        <p className="mt-6 text-2xl text-slate-700 max-w-4xl mx-auto">
          Building a transparent ecosystem where people, ideas,
          initiatives, knowledge, and stewardship work together
          for future generations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a href="/how-it-works"
             className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 font-semibold shadow-lg">
             How It Works
          </a>

          <a href="/community"
             className="rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 font-semibold shadow-lg">
             Our Community
          </a>

          <a href="/initiatives"
             className="rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-8 py-4 font-semibold shadow-lg">
             Initiatives
          </a>

        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl border border-slate-200 p-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="text-left">

              <h2 className="text-4xl font-serif font-bold text-slate-900">
                Why GoldTrack Rewards Exists
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                GoldTrack Rewards was created to encourage participation,
                preserve knowledge, recognize meaningful contributions,
                and provide practical tools that strengthen communities.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                The mission remains the mission.
                The token is simply one tool that helps support that mission.
              </p>

            </div>

            <div className="flex justify-center">

              <div className="w-72 h-72 rounded-full border-8 border-yellow-500 bg-gradient-to-br from-emerald-900 to-slate-800 flex items-center justify-center shadow-2xl">

                <span className="text-7xl font-bold text-yellow-400">
                  GTR
                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="rounded-2xl bg-emerald-50 p-8 shadow-md">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-4">
              People first. Community first. Long-term stewardship.
            </p>
          </div>

          <div className="rounded-2xl bg-sky-50 p-8 shadow-md">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="mt-4">
              Every contribution has value.
              Every participant has a place.
            </p>
          </div>

          <div className="rounded-2xl bg-amber-50 p-8 shadow-md">
            <h3 className="text-2xl font-bold">Legacy</h3>
            <p className="mt-4">
              Preserve today's knowledge so tomorrow's builders
              can begin farther ahead.
            </p>
          </div>

        </div>

      </section>

    </main>
  );

         
        

      </section>

    </main>
  );
}
