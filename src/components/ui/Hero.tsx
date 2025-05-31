"use client";
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[42.25em] flex">
      <Image
        id="hero"
        className="absolute inset-0 object-cover w-full h-full"
        src={"/fundo.webp"}
        alt="Fundo da página"
        fill
        sizes="100vw"
        priority
      />
      {/* Texto */}
      <div className="relative z-10 right-0 w-full h-full md:flex-1 self-center p-6 md:p-12 text-white text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Redome: Proteção Completa Contra a Dengue
        </h1>
        <p className="font-sans sm:text-lg lg:text-xl mb-6">
          Sistema inteligente de monitoramento de focos de Aedes aegypti em tempo real
        </p>
        <Link
          href="/demo"
          className="inline-block mt-4 px-6 py-3 bg-primary hover:bg-secondary transition-colors rounded-xl font-semibold"
        >
          Ir para Demonstração
        </Link>
      </div>
    </section>
  );
}