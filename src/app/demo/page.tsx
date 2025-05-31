"use client";

import { Footer } from "@/components/ui/Footer";
import { Map } from "@/components/ui/Map";
import Metric from "@/components/ui/Metric";
import { AlertsNotifications } from "@/components/ui/Alerts";

export default function DemoPage() {
  return (
    <>
      <main className="flex flex-col gap-6 px-6 py-4 md:px-12 md:py-6">
        {/* Título e Descrição */}
        <section>
          <h1 className="text-base md:text-2xl font-bold text-primary">
            Mapa de Calor
          </h1>
          <p className="text-sm md:text-lg text-terciary">
            Identifique áreas de risco de dengue
          </p>
        </section>

        {/* Mapa */}
        <div className="w-full h-[300px] md:h-[600px] rounded-sm overflow-hidden ">
          <Map />
        </div>

        {/* Status Gerais */}
        <section className="flex flex-col gap-2">
          <h2 className="text-base md:text-2xl font-bold text-primary text-center">
            Status Gerais
          </h2>
          <p className="text-sm md:text-lg text-terciary text-center">
            Dados Gerais de Dispositivos e Leituras
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {[
              {
                title: "Dispositivos Ativos",
                value: 15,
                src: "/chrome-cast.svg",
              },
              { title: "Ocorrências", value: 10, src: "/sync-accuracy.svg" },
              {
                title: "Zonas Moitoradas",
                value: 10,
                src: "/graph-leveling.svg",
              },
              { title: "Zonas de Risco", value: 2, src: "/analysis-risk.svg" },
            ].map((item, index) => (
              <Metric
                key={index}
                label={item.title}
                value={item.value}
                src={item.src}
                className="bg-[#91B4E2]/15 text-black"
              />
            ))}
          </div>
        </section>

        {/* Alertas e Atividades */}
        <section className="w-full h-full">
          {/* Alertas e Notificações */}
          <div className="">
            <AlertsNotifications />
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
