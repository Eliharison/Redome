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

      {fabOpen && (
        <div className="fixed z-40 bottom-[120px] right-6 flex flex-col gap-3 items-end">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`w-[79px] h-[68px] flex items-center justify-center rounded-[10px] shadow-md font-medium transition-colors duration-300 text-base
                ${pathname === item.href ? "bg-[#2A3B4D] text-white " : "bg-[#EDEDED] text-[#2A3B4D]"}`}
              onClick={() => setFabOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
