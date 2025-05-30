"use client";
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="hero"
      className="flex md:flex-row items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/fundo.jpg')", minHeight: '42.25rem' }}
    >
      {/* Texto */}
      <div className="w-full md:flex-1 p-6 md:p-12 text-white text-center md:text-left">
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