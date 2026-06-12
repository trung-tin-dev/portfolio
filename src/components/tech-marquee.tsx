"use client";

import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiFigma,
} from "react-icons/si";

const row1 = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
];

const row2 = [
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: SiGit },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "Express", icon: SiExpress },
];

export default function TechMarquee() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Technologies
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Tools I enjoy using.
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#09090b] to-transparent" />

        {/* Fade bên phải */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#09090b] to-transparent" />
        {/* Hàng 1 */}
        <div className="marquee flex w-max gap-16">
          {[...row1, ...row1].map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="
          group flex items-center gap-4
          text-zinc-600
transition-all duration-300
hover:text-white
hover:scale-105
          hover:text-white
        "
            >
              <Icon className="h-10 w-10" />

              <span className="text-lg font-medium">{name}</span>
            </div>
          ))}
        </div>

        {/* Hàng 2 */}
        <div className="marquee-reverse mt-10 flex w-max gap-16">
          {[...row2, ...row2].map(({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="
          group flex items-center gap-4
         text-zinc-600
transition-all duration-300
hover:text-white
hover:scale-105
          hover:text-white
        "
            >
              <Icon className="h-10 w-10" />

              <span className="text-lg font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}