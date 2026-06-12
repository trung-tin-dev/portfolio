export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          gap-4
          px-6
          py-10
          text-sm
          text-zinc-500
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <p>Designed and built by Tin.</p>

        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
