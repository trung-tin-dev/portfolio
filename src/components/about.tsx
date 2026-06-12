import Reveal from "./reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          About
        </p>

        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Learning by building, growing through the process.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I&apos;m a developer who enjoys learning through creating real things. I&apos;m
          like exploring different areas of software development, experimenting
          with new ideas, and crafting experiences that feel intuitive,
          polished, and enjoyable to use.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Right now, I&apos;m focused on improving one project at a time while
          continuing to discover what kind of developer I want to become.
        </p>
      </Reveal>
    </section>
  );
}
