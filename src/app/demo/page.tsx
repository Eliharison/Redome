"use client";

import { Map } from "@/components/ui/Map";
import Metric from "@/components/ui/Metric";

export default function DemoPage() {
  return (
    <main className="flex flex-col gap-6 px-6 py-4 md:px-12 md:py-6">
      {/* Título e Descrição */}
      <section>
        <h1 className="text-base md:text-2xl font-bold text-primary">Mapa de Calor</h1>
        <p className="text-sm md:text-lg text-terciary">Identifique áreas de risco de dengue</p>
      </section>

      {/* Mapa */}
      <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
        <Map />
      </div>

      {/* Status Gerais */}
      <section className="flex flex-col gap-2">
        <h2 className="text-base md:text-2xl font-bold text-primary text-center">Status Gerais</h2>
        <p className="text-sm md:text-lg text-terciary text-center">Dados Gerais de Dispositivos e Leituras</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {[
            { title: "Dispositivos Ativos", value: 15 },
            { title: "Devices Offline", value: 10 },
            { title: "Devices Offline", value: 10 },
            { title: "Readings Last 24h", value: 2 },
          ].map((item, index) => (
            <div key={index} className="bg-[#e8eef7] p-4 rounded-xl shadow text-center">
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alertas e Atividades */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Alertas e Notificações */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-4 text-foreground">Alertas e Notificações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-4 flex gap-4">
                <div className="bg-gray-200 w-12 h-12 rounded-md" />
                <div>
                  <p className="font-semibold text-sm">
                    {i % 2 === 0 ? "Novas sugestões disponíveis!" : "Menos focos registrados!"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {i % 2 === 0
                      ? "Foram encontrados possíveis pont..."
                      : "Comparado com o últim..."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atividades Recentes */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-foreground">Atividades Recentes</h3>
          <div className="bg-white rounded-xl shadow p-6 min-h-[150px] flex items-center justify-center text-gray-400">
            Nenhuma atividade recente
          </div>
        </div>
      </section>
    </main>
  );
}
