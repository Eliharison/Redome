"use client";
import Image from 'next/image'

export function About() {
  return (
    <section id="sobre" className="bg-[#fbfbfb] m-[1rem]">
      <div className="max-w-1xl mx-auto flex flex-wrap items-center justify-between gap-8 p-6 md:p-12">
        {/* Texto */}
        <div className="flex-1 min-w-[300px] max-w-[800px]">
          <h2 className="text-3xl text-[#1A2E48] font-bold mb-4">Sobre o Redome</h2>
          <span className="block w-22 h-1 bg-[#1A2E48] rounded-xl mt-2 mb-6"></span>
          <p className="text-[18px] leading-[35px] text-justify">
            O Redome é uma solução inovadora que utiliza tecnologia de
            vaporização de essências repelentes, sensores IoT e triangulação
            para monitorar e neutralizar mosquitos transmissores de dengue,
            garantindo segurança contínua e sustentável.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1 min-w-[300px] max-w-[600px]">
        <div className="sketchfab-embed-wrapper">
  <iframe
    src="https://sketchfab.com/models/4b6ea3580e7e4c92ba2b2d4feccfdee2/embed"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; fullscreen; xr-spatial-tracking; execution-while-out-of-viewport; execution-while-not-rendered; web-share"
    style={{ width: '100%', height: '580px' }}
  ></iframe>
</div>
        </div>
      </div>
    </section>
  )
}
