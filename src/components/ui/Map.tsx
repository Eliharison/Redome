'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
  const center: [number, number] = [-23.55052, -46.633308];
  const markers = [
    { lat: -23.55052, lng: -46.633308, title: 'Central Redôme' },
    { lat: -23.5632, lng: -46.6544, title: 'Área Protegida 1' },
    { lat: -23.5435, lng: -46.6291, title: 'Área Protegida 2' }
  ];

  return (
    <section id="mapa" className="bg-white text-center py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-[#1A2E48] font-bold mb-8">Mapa de Atuação em Tempo Real</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <MapContainer center={center} zoom={11} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((m) => (
              <Marker key={m.title} position={[m.lat, m.lng]}>
                <Popup>
                  <b>{m.title}</b><br />Status: Ativo
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}