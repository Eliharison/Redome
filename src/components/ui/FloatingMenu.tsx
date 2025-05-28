import { useState } from "react";
import Link from "next/link";

export function FloatingMenu({ pathname }: { pathname: string }) {
  const [fabOpen, setFabOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        className={`fixed z-50 bottom-6 right-6 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none transition-transform duration-300 ease-in-out ${fabOpen ? "scale-110 rotate-45" : "scale-100 rotate-0"}`}
        onClick={() => setFabOpen((open) => !open)}
        aria-label="Abrir menu"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          className="transition-transform duration-300"
          style={{ transform: fabOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {fabOpen && (
        <div className="fixed z-40 bottom-24 right-6 flex flex-col gap-3 animate-fade-in transition-all duration-300">
          <Link
            href="/"
            className={`flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full shadow-lg font-medium border border-primary transition hover:bg-primary hover:text-white ${pathname === "/" ? "font-bold underline" : ""}`}
            onClick={() => setFabOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/demo"
            className={`flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full shadow-lg font-medium border border-primary transition hover:bg-primary hover:text-white ${pathname === "/demo" ? "font-bold underline" : ""}`}
            onClick={() => setFabOpen(false)}
          >
            Demo
          </Link>
        </div>
      )}
    </div>
  );
}
