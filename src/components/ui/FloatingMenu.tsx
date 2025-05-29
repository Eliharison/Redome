import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function FloatingMenu({ pathname }: { pathname: string }) {
  const [fabOpen, setFabOpen] = useState(false);

  const menuItems = [
    { href: "/demo", label: "Demo" },
    { href: "/", label: "Home" },
  ];

  return (
    <div className="md:hidden">
      <button
        className={`fixed z-50 bottom-6 right-6 bg-primary text-white rounded-[10px] w-[79px] h-[68px] flex items-center justify-center shadow-lg focus:outline-none transition-transform duration-300 ease-in-out active:scale-105`}
        onClick={() => setFabOpen((open) => !open)}
        aria-label="Abrir menu"
      >
        <Image
          src={fabOpen ? "/Esc.svg" : "/hamburguer.svg"}
          alt="Menu"
          className={`transition-transform duration-300 ${fabOpen ? "rotate-180" : "rotate-0"}`}
          width={33}
          height={22}
        />
      </button>

      <div
        className={`fixed z-40 bottom-6 right-6 w-[79px] h-[68px] ${fabOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{position: 'fixed'}}
      >
        {menuItems.map((item, idx) => {
          const finalBottom = 68 + 12 + idx * 75; 
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-[79px] h-[68px] flex items-center justify-center rounded-[10px] shadow-md font-medium transition-all duration-300 text-base
                ${pathname === item.href ? "bg-primary text-white " : "bg-background text-primary"}
                ${fabOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
              style={{
                position: 'absolute',
                right: 0,
                bottom: fabOpen ? `${finalBottom}px` : '0px',
                zIndex: 40 - idx,
                transitionProperty: 'opacity, transform, bottom',
                transitionDuration: '300ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: fabOpen ? `${idx * 75}ms` : '0ms',
                pointerEvents: fabOpen ? 'auto' : 'none',
              }}
              onClick={() => setFabOpen(false)}
              tabIndex={fabOpen ? 0 : -1}
              aria-hidden={!fabOpen}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
