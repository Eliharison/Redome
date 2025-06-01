"use client";

import { useRoute } from "@/context/route-context";
import Logo from "@/components/ui/Logo";
import { ProfileBlock } from "./ProfileBlock";
import { FloatingMenu } from "./FloatingMenu";

export function Header() {
  const pathname = useRoute();
  return (
    <header className="bg-background h-[65px] justify-center text-white px-4 py-3 relative flex flex-col items-start md:flex-row md:items-center md:h-[75px] md:px-8">
      <div className={`flex w-full items-center ${pathname === "/demo" ? "justify-between" : "justify-between md:justify-start"}`}>
        <Logo 
          color={"#1A2E48"}
        />
        {pathname === "/demo" && <ProfileBlock />}
      </div>
      {/* Menu Desktop */}
      <nav className="hidden md:flex md:w-auto md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <ul className="flex flex-row space-x-4">
          <li>
            <a
              href="/"
              className={`text-primary font-medium relative transition-colors duration-200
                ${pathname === "/" ? "after:w-full after:opacity-100" : "after:w-0 after:opacity-0"}
                after:content-[''] after:block after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1
                hover:after:w-full hover:after:opacity-100`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/demo"
              className={`text-primary font-medium relative transition-colors duration-200
                ${pathname === "/demo" ? "after:w-full after:opacity-100" : "after:w-0 after:opacity-0"}
                after:content-[''] after:block after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1
                hover:after:w-full hover:after:opacity-100`}
            >
              Demo
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Botão Flutuante Mobile */}
      <FloatingMenu pathname={pathname} />
      

    </header>
  );
}
