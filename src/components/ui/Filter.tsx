import { useState } from "react";
import { ChevronDown, Building2 } from "lucide-react";

const bairros = [
    { nome: "Barão Geraldo", coordenadas: [-47.0792, -22.8284] },
    { nome: "Cambuí", coordenadas: [-47.0586, -22.9005] },
    { nome: "Centro", coordenadas: [-47.0608, -22.9058] },
    { nome: "Nova Campinas", coordenadas: [-47.0500, -22.9100] },
    { nome: "Taquaral", coordenadas: [-47.0572, -22.8802] },
    { nome: "Jardim Chapadão", coordenadas: [-47.0661, -22.8783] },
    { nome: "Vila Industrial", coordenadas: [-47.0532, -22.9050] },
    { nome: "Jardim Proença", coordenadas: [-47.0628, -22.9125] },
    { nome: "Jardim das Paineiras", coordenadas: [-47.0420, -22.9112] },
    { nome: "Jardim do Trevo", coordenadas: [-47.1021, -22.9126] },
    { nome: "Jardim Aurélia", coordenadas: [-47.0905, -22.8936] },
    { nome: "Jardim Santa Genebra", coordenadas: [-47.0750, -22.8463] },
    { nome: "Parque Prado", coordenadas: [-47.1115, -22.9296] },
    { nome: "Sousas", coordenadas: [-47.0188, -22.8543] },
    { nome: "Carlos Gomes", coordenadas: [-47.0215, -22.8612] },
    { nome: "Jardim Eulina", coordenadas: [-47.0779, -22.8809] },
    { nome: "Jardim Garcia", coordenadas: [-47.1085, -22.8897] },
    { nome: "Jardim Londres", coordenadas: [-47.1268, -22.8991] },
    { nome: "Jardim Nova Europa", coordenadas: [-47.1232, -22.9203] },
    { nome: "Jardim Santana", coordenadas: [-47.0699, -22.8882] }
  ];

export default function FilterComponent({ onSelectBairro }: { onSelectBairro: (lat: number, lng: number) => void }) {
  const [selectedBairro, setSelectedBairro] = useState(bairros[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (bairro: (typeof bairros)[0]) => {
    setSelectedBairro(bairro);
    setOpen(false);
    onSelectBairro(bairro.coordenadas[1], bairro.coordenadas[0]); // Latitude e longitude corretas
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-2 bg-white border rounded-xl shadow-sm hover:shadow-md"
      >
        <div className="flex items-center space-x-2">
          <Building2 className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-800">{selectedBairro.nome}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-xl shadow-lg">
          {bairros.map((bairro) => (
            <button
              key={bairro.nome}
              onClick={() => handleSelect(bairro)}
              className="w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
            >
              {bairro.nome}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}