import Reveal from "./reveal";
import { FaAngellist } from "react-icons/fa";
import { FaGithub, FaFacebook, FaPhone } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
const contacts = [
  {
    title: "GitHub",
    value: "trung-tin-dev",
    href: "https://github.com/trung-tin-dev",
    icon: FaGithub,
    hoverClass:
      "hover:border-zinc-400/30 hover:bg-zinc-500/10 hover:text-zinc-100",
  },
  {
    title: "Email",
    value: "tatin3469@gmail.com",
    href: "#",
    icon: FaAngellist, // hoặc FaEnvelope hợp lý hơn
    hoverClass:
      "hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-300",
  },
  {
    title: "Phone",
    value: "0834636991",
    href: "tel:0834636991",
    icon: FaPhone,
    hoverClass:
      "hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">Let&apos;s connect.</h2>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Whether it&apos;s about projects, ideas, or simply saying hello, feel free
          to reach out.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {contacts.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
    group block rounded-3xl
    border border-white/10
    bg-white/2
    p-7
    transition-all duration-300
    hover:-translate-y-1
    ${item.hoverClass}
  `}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
    rounded-2xl
    border border-white/10
    p-3
    transition-all duration-300
    group-hover:border-current
  "
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </div>

                  <HiArrowUpRight
                    size={18}
                    className="
                      text-zinc-500
                      transition
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-white
                    "
                  />
                </div>

                <p className="mt-8 text-sm text-zinc-500">{item.title}</p>

                <h3 className="mt-2 break-all text-lg font-medium">
                  {item.value}
                </h3>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
