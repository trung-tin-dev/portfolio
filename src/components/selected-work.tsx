import Reveal from "./reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">
          Projects are coming soon.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I&apos;m currently exploring ideas, building side projects, and
          learning through the process.
        </p>
      </Reveal>

      {/* <Reveal delay={0.2}>
        <div
          className="
            mt-14
            rounded-3xl
            border border-white/10
            bg-white/[0.02]
            p-8
            transition-all duration-300
            hover:border-white/20
            hover:bg-white/[0.03]
          "
        >
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Currently Building
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Cinema Booking System
              </h3>

              <p className="mt-4 max-w-2xl text-zinc-400">
                A production-inspired cinema booking platform focused on
                scalability, clean architecture, and real-world booking
                workflows.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-zinc-500">Status</span>

              <span
                className="
                  w-fit
                  rounded-full
                  border border-emerald-500/20
                  bg-emerald-500/10
                  px-4 py-2
                  text-sm
                  text-emerald-400
                "
              >
                In Progress
              </span>
            </div>
          </div>
        </div>
      </Reveal> */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div
            className="
            h-full
      rounded-3xl
      border border-white/10
      bg-white/2
      p-8
      transition-all duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/3
    "
          >
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Completed Project
                </p>

                <h3 className="mt-4 text-2xl font-semibold">Blossom Budget</h3>

                <p className="mt-4 max-w-2xl text-zinc-400">
                  A modern expense tracking application that helps users record
                  transactions, categorize spending, and manage personal
                  finances with a clean UI.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://expense-tracker-phi-indol-54.vercel.app/"
                    target="_blank"
                    className="
              rounded-full
              border border-white/10
              px-4 py-2
              text-sm
              transition
              hover:border-white/20
              hover:bg-white/5
            "
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/trung-tin-dev/expense-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              rounded-full
              border border-white/10
              px-4 py-2
              text-sm
              transition
              hover:border-white/20
              hover:bg-white/5
            "
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <span
                className="
          h-fit w-fit
          rounded-full
          border border-emerald-500/20
          bg-emerald-500/10
          px-4 py-2
          text-sm
          text-emerald-400
        "
              >
                Completed
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="
            h-full
      rounded-3xl
      border border-white/10
      bg-white/2
      p-8
      transition-all duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.03]
    "
          >
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Currently Building
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Cinema Booking System
                </h3>

                <p className="mt-4 max-w-2xl text-zinc-400">
                  A production-inspired cinema booking platform focused on
                  scalability, clean architecture, and real-world booking
                  workflows.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="
              rounded-full
              border border-white/10
              px-4 py-2
              text-sm
              transition
              hover:border-white/20
              hover:bg-white/5
            "
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/trung-tin-dev/cineverse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              rounded-full
              border border-white/10
              px-4 py-2
              text-sm
              transition
              hover:border-white/20
              hover:bg-white/5
            "
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <span
                className="
          h-fit w-fit
          rounded-full
          border border-amber-500/20
          bg-amber-500/10
          px-4 py-2
          text-sm
          text-amber-400
        "
              >
                In Progress
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
