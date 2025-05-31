"use client";
import React from "react";
import Image from "next/image";
import { AlertTriangle, BarChart2 } from "lucide-react";

interface Alert {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "warning" | "success";
}

const alerts: Alert[] = [
  {
    id: 1,
    title: "Novas sugestões disponíveis!",
    description:
      "Foram encontrados possíveis pontos de proliferação do mosquito transmissor.",
    date: "31/05/2025",
    type: "warning",
  },
  {
    id: 2,
    title: "Menos focos registrados!",
    description:
      "Comparado com o último levantamento, houve uma redução significativa nos casos.",
    date: "30/05/2025",
    type: "success",
  },
  {
    id: 3,
    title: "Novas sugestões disponíveis!",
    description:
      "Foram encontrados possíveis pontos de proliferação do mosquito transmissor.",
    date: "29/05/2025",
    type: "warning",
  },
];

const markerStyles = {
  warning: "bg-[#E2D856]",
  success: "bg-[#A0D277]",
};

export function AlertsNotifications() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold text-[#1A2E48] mb-1">
        Alertas e Notificações
      </h2>
      <p className="text-gray-500 text-sm mb-4">Últimas Atualizações</p>

      <ul className="space-y-6">
        {alerts.map(({ id, title, description, date, type }) => (
          <li
            key={id}
            className={`flex h-full items-start w-full pl-1 ${markerStyles[type]} rounded-r-lg`}
          >
            <div className=" flex-1 p-4 items-center flex bg-background">
              <div className="flex-1 gap-2 items-center flex">
                {/* Ícone dentro de círculo */}
                <div className="bg-gray-200 p-3 rounded-full flex-shrink-0">
                  {type === "warning" ? (
                    <Image
                      src={"/alert.svg"}
                      alt="Menos Registros"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src={"/graph-down.svg"}
                      alt="Menos Registros"
                      width={24}
                      height={24}
                    />
                  )}
                </div>

                {/* Conteúdo */}
                <div className="ml-3">
                  <h3 className="text-[14px] font-bold text-[#1A2E48]">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {description}
                  </p>
                  <span className="block md:hidden text-xs font-bold text-[#1a2e48] mt-1">
                  {date}
                </span>
                </div>
              </div>
              <span className="hidden md:block text-xs font-bold text-[#1a2e48] ml-4 flex-shrink-0">
                {date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
