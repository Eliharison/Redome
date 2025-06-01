'use client';

import {
  Leaf,
  DollarSign,
  Shield,
} from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-[#1A2E48]" />,
      title: 'Sustentabilidade',
      desc: 'Reduz em até 81% as emissões de gases de efeito estufa associadas à fabricação do dispositivo.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#1A2E48]" />,
      title: 'Baixo Custo e Escalável',
      desc: 'Permite diminuir o CAPEX inicial em até 60% frente a soluções convencionais.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1A2E48]" />,
      title: 'Segurança e Saúde',
      desc: 'Minimiza a exposição ocupacional e potencializa a prevenção.',
    },
  ];

  return (
    <section id="beneficios" className="bg-[#fbfbfb]">
      <div className="max-w-1xl mx-auto p-6 md:p-12">
        {/* Título pequeno */}
        <p className="text-xl text-[#1A2E48] font-bold mb-8">
          Recursos Principais
        </p>
        {/* Título grande */}
        <h2 className="text-3xl text-[#1A2E48] text-left mb-6 relative inline-block font-bold md:ml-0 sm:ml-4">
          Vantagens Exclusivas
        
        </h2>
        <p className='mb-7'>Solução inteligente e automatizada que reduz a exposição dos agentes e aumenta a eficiência no combate ao mosquito.</p>

        <div className="flex flex-wrap gap-6 justify-center">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex-1 min-w-[300px] cursor-pointer rounded-xl p-6 flex flex-col items-start text-left bg-[#F0F4F8] transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-xl text-[#1A2E48] font-semibold mb-2">
                {b.title}
              </h3>
              <p className="text-base leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
