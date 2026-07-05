export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">

      <section className="max-w-6xl mx-auto px-8 py-20 text-center">

        <h1 className="text-6xl font-bold text-slate-900">
          About GoldTrack Rewards
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6">
          Building a transparent rewards ecosystem where communities,
          initiatives, knowledge and stewardship work together to create
          lasting value.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a href="/how-it-works"
             className="px-8 py-4 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800">
            How It Works
          </a>

          <a href="/community"
             className="px-8 py-4 rounded-xl bg-sky-700 text-white font-semibold hover:bg-sky-800">
            Our Community
          </a>

          <a href="/charter"
             className="px-8 py-4 rounded-xl bg-violet-700 text-white font-semibold hover:bg-violet-800">
            Read The Charter
          </a>

        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl bg-white shadow-xl p-8 border-t-4 border-emerald-600">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p>
              Create practical tools that strengthen people, encourage
              participation, and support meaningful community initiatives.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-xl p-8 border-t-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-4">
              Our Values
            </h2>

            <p>
              Transparency. Stewardship. Service. Participation.
              Long-term thinking.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-xl p-8 border-t-4 border-amber-500">
            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p>
              A growing ecosystem where ideas become initiatives,
              initiatives become programs, and programs become lasting
              legacy.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}