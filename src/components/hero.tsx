"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./animated-text";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiRedis,
  SiFigma,
} from "react-icons/si";

export default function Hero() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMouse({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* AURORA BACKGROUND */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
        }}
      >
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-1/2 bottom-1/3 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      </div>

      {/* Background Glow */}
      <div
        className="
    absolute
    left-1/2
    top-1/3
    h-[600px]
    w-[600px]
    -translate-x-1/2
    rounded-full
    bg-white/[0.04]
    blur-[140px]
  "
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* CENTER FOCUS ZONE (gần text) */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
          <SiReact size={90} className="animate-float" />
        </div>

        {/* ORBIT LAYER 1 */}
        <div className="absolute left-[40%] top-[25%] opacity-20">
          <SiNextdotjs size={45} className="animate-float-slow" />
        </div>

        <div className="absolute right-[35%] top-[40%] opacity-20">
          <SiTypescript size={45} className="animate-float" />
        </div>

        {/* ORBIT LAYER 2 */}
        <div className="absolute left-[20%] top-[55%] opacity-15">
          <SiNodedotjs size={40} className="animate-float-slow" />
        </div>

        <div className="absolute right-[25%] bottom-[30%] opacity-15">
          <SiPostgresql size={40} className="animate-float" />
        </div>

        <div className="absolute left-[60%] bottom-[25%] opacity-15">
          <SiDocker size={40} className="animate-float-slow" />
        </div>

        {/* FAR BACKGROUND LAYER */}
        <div className="absolute left-[10%] top-[20%] opacity-10">
          <SiGit size={35} className="animate-float" />
        </div>

        <div className="absolute right-[10%] top-[25%] opacity-10">
          <SiTailwindcss size={35} className="animate-float-slow" />
        </div>

        <div className="absolute left-[40%] bottom-[10%] opacity-10">
          <SiRedis size={35} className="animate-float" />
        </div>

        <div className="absolute right-[15%] bottom-[15%] opacity-10">
          <SiFigma size={35} className="animate-float-slow" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <AnimatedText text="Hi, I'm trung-tin-dev" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-400
              md:text-xl
            "
          >
            I enjoy building things for the web, learning through projects, and
            turning ideas into experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
            className="mt-4 text-zinc-500"
          >
            Developer based in Vietnam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
            }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#work"
              className="
rounded-full
bg-white
px-6
py-3
font-medium
text-black
transition-all duration-300
hover:scale-[1.03]
hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
rounded-full
border border-white/10
px-6 py-3
font-medium
transition-all duration-300
hover:scale-[1.03]
hover:border-white/20
hover:bg-white/[0.04]
"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
