import Image from 'next/image';

export function Tech() {
  return (
    <section id="tecnologia" className="bg-white">
      <div className="max-w-1xl mx-auto p-6 md:p-12">
        <h2 className="text-3xl md:text-3xl text-[#1A2E48] font-bold mb-2 relative inline-block">
          Nossa Tecnologia
          <span className="block w-12 h-1 bg-[#1A2E48] rounded-xl mt-4 mb-6"></span>
        </h2>
        <div className="flex flex-wrap gap-8 items-start">
          <div className="flex-1 min-w-[400px]">
            <p className="text-base text-[#2c3e50] mb-4">O Redome utiliza uma combinação exclusiva de:</p>
            <ul className="list-none my-4 space-y-3">
              {[
                'Nebulização inteligente',
                'Sensores IoT integrados',
                'Essências naturais patentadas',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-[#2c3e50]">
                  <svg viewBox="0 0 16 16" className="w-5 h-5 mr-3 fill-[#1A2E48] flex-shrink-0">
                    <path d="M6.173 14.727L.393 8.947l1.414-1.414L6.173 11.9l8.02-8.02 1.414 1.414z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="italic text-[#4a4a4a] text-justify mt-4 mb-4 sm: mr-10">
              Nosso sistema detecta a presença de mosquitos e ativa automaticamente a proteção, garantindo eficiência máxima com consumo mínimo de recursos.
            </p>
          </div>
        </div>
        <div className="bg-[#C7D9DD] p-6 md:p-8 rounded-xl mt-8 flex flex-wrap justify-around gap-6">
          {[
            { value: '+95%', label: 'Eficácia Comprovada' },
            { value: '24h', label: 'Proteção Contínua' },
            { value: '10x', label: 'Mais Econômico' },
          ].map((stat, idx) => (
            <div key={idx} className="flex-1 min-w-[150px] text-center">
              <h3 className="text-2xl md:text-3xl text-[#1A2E48] font-bold mb-2">{stat.value}</h3>
              <p className="text-base font-medium text-[#2c3e50]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}