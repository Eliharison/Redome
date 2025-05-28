"use client";
import Image from 'next/image'

export function About() {
  return (
    <section id="sobre" className="bg-[#E3F4F4]">
      <div className="max-w-1xl mx-auto flex flex-wrap items-center gap-8 p-6 md:p-12">
        {/* Texto */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl text-[#1A2E48] font-bold mb-4">Sobre o Redome</h2>
          <span className="block w-12 h-1 bg-[#1A2E48] rounded-xl mt-2 mb-6"></span>
          <p className="text-base leading-relaxed text-justify">
            O Redome é uma solução inovadora que utiliza tecnologia de
            vaporização de essências repelentes, sensores IoT e triangulação
            para monitorar e neutralizar mosquitos transmissores de dengue,
            garantindo segurança contínua e sustentável.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1 min-w-[300px]">
          <Image
            src="/fundo.jpg"
            alt="Sobre Redome"
            width={500}
            height={350}
            className="w-full rounded-lg shadow-lg h-[25rem]"
          />
        </div>
      </div>
    </section>
  )
}
