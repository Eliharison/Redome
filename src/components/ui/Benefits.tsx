"use client";

export function Benefits() {
    return (
      <section id="beneficios" className="bg-[#E3F4F4]">
        <div className="max-w-1xl mx-auto p-6 md:p-12">
          <h2 className="text-3xl text-[#1A2E48] text-center mb-6 relative inline-block font-bold sm: ml-4">
            Vantagens Exclusivas
            <span className="block w-12 h-1 bg-[#1A2E48] rounded-xl mt-4 mb-6"></span>
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { icon: '🌿', title: 'Sustentabilidade', desc: 'Zero impacto ambiental com componentes biodegradáveis.' },
              { icon: '📱', title: 'Controle Inteligente', desc: 'Monitoramento remoto via aplicativo exclusivo.' },
              { icon: '⏱️', title: 'Proteção Contínua', desc: 'Atuação imediata ao detectar atividade de mosquitos.' },
            ].map((b, i) => (
              <div
                key={i}
                className="flex-1 min-w-[300px] border-2 border-[#1A2E48] cursor-pointer rounded-xl p-6 flex flex-col items-center text-center bg-white transition-transform hover:translate-y-[-5px] hover:shadow-xl"
              >
                <div className="text-3xl mb-4 text-[#457A57]">{b.icon}</div>
                <h3 className="text-xl text-[#1A2E48] font-semibold mb-2">{b.title}</h3>
                <p className="text-base leading-relaxed text-justify">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  