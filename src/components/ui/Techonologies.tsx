import Image from 'next/image';

export function Tech() {
  return (
    <section id="tecnologia" className="bg-[#ECF1F8] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch">
        
        {/* === Coluna do Pitch (esquerda / topo em mobile) === */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h3 className="text-3xl font-bold text-[#1A2E48] text-center">
              Pitch
            </h3>
            {/* aqui você pode adicionar conteúdo extra, imagem, etc */}
          </div>
        </div>

        {/* === Coluna da Nossa Solução (direita / baixo em mobile) === */}
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <div className="max-w-md">
            <h2 className="text-3xl text-[#1A2E48] font-bold mb-4">
              Nossa Solução
            </h2>
            <p className="text-base text-[#2c3e50] mb-6">
              Nossa solução integra tecnologias avançadas para oferecer uma
              abordagem abrangente no controle da dengue.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                'Nebulização inteligente',
                'Sensores IoT integrados',
                'Essências naturais patentadas',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-[#2c3e50]">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5 mr-3 fill-[#1A2E48] flex-shrink-0 mt-1"
                  >
                    <path d="M6.173 14.727L.393 8.947l1.414-1.414L6.173 11.9l8.02-8.02 1.414 1.414z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="italic text-[#4a4a4a]">
              Nosso sistema detecta a presença de mosquitos e ativa
              automaticamente a proteção, garantindo eficiência máxima com
              consumo mínimo de recursos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
