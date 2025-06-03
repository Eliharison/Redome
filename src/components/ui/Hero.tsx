"use client";
import Image from 'next/image';
import Logo from "@/components/ui/Logo";
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[42.25em] flex bg-[#ECF1F8] m-[3rem] rounded-xl pl-8">
      {/* Texto */}
      <div className="relative z-10 right-0 w-full h-full md:flex-1 self-center p-6 md:p-12 text-[#1A2E48] flex flex-col justify-center md:block text-center md:text-left">
      <Image
                  src="/Logo_Plus.svg"
                  alt="Mockup Redome"
                  priority
                  width={240}
                  height={39}
                  className="rounded-lg pb-10 mx-auto md:mx-0"
                />
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-10">
          Proteção Completa Contra a Dengue
        </h1>
        <p className="font-sans text-[#1A2E48] sm:text-lg lg:text-2xl mb-6">
          Sistema inteligente de monitoramento de focos de Aedes aegypti em tempo real
        </p>
        <Link
          href="/demo"
          className="text-white inline-block mt-4 px-10 py-6 bg-primary hover:bg-secondary transition-colors rounded-xl font-semibold"
        >
          Ir para Demonstração
        </Link>
      </div>
      <Image
                  src="/HandandiPhone16Pro.png"
                  alt="Mockup Redome"
                  priority
                  width={820}
                  height={350}
                  className="rounded-lg hidden lg:block"
                />
    </section>
  );
}