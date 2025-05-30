"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "SEU_TOKEN_MAPBOX_AQUI";

export function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-48.8); // Centro aproximado do estado de SP
  const [lat, setLat] = useState(-22.5); // Centro aproximado do estado de SP
  const [zoom, setZoom] = useState(6.15); // Zoom para visualizar o estado inteiro

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: process.env.NEXT_PUBLIC_MAPBOX_STYLE || "https://demotiles.maplibre.org/style.json",
        center: [lng, lat],
        zoom: zoom,
      });

      // Adiciona 7 marcadores agrupados na região de Registro-SP
      const pontosRegistro = [
        { lng: -47.8445, lat: -24.4971 },
        { lng: -47.845, lat: -24.4975 },
        { lng: -47.844, lat: -24.4965 },
        { lng: -47.8455, lat: -24.497 },
        { lng: -47.8448, lat: -24.4973 },
        { lng: -47.8452, lat: -24.4968 },
        { lng: -47.8443, lat: -24.4972 },
      ];
      pontosRegistro.forEach((ponto) => {
        const el = document.createElement("div");
        el.style.backgroundImage = "url('/pin.svg')";
        el.style.width = "25px";
        el.style.height = "25px";
        el.style.backgroundSize = "contain";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
        el.style.cursor = "pointer";
        new mapboxgl.Marker({ element: el })
          .setLngLat([ponto.lng, ponto.lat])
          .addTo(map.current!);
      });

      // Fonte GeoJSON para o heatmap (com tipos explícitos)
      const geojson = {
        type: "FeatureCollection" as const,
        features: [
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.8445, -24.4971],
            },
            properties: {},
          },
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.845, -24.4975],
            },
            properties: {},
          },
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.844, -24.4965],
            },
            properties: {},
          },
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.8455, -24.497],
            },
            properties: {},
          },
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.8448, -24.4973],
            },
            properties: {},
          },
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.8452, -24.4968],
            },
            properties: {},
          },
          {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [-47.8443, -24.4972],
            },
            properties: {},
          },
        ],
      };

      map.current.on("load", () => {
        // Adiciona a fonte GeoJSON
        map.current!.addSource("pontos-heatmap", {
          type: "geojson",
          data: geojson,
        });
        // Adiciona a camada de heatmap
        map.current!.addLayer({
          id: "heatmap-pontos",
          type: "heatmap",
          source: "pontos-heatmap",
          maxzoom: 15,
          paint: {
            "heatmap-weight": 1,
            "heatmap-intensity": 1.5,
            "heatmap-radius": [
              "interpolate",
              ["linear"],
              ["zoom"],
              10,
              8,
              13,
              20,
              15,
              30,
            ], // Aproximação para representar ~300m em níveis médios de zoom
            "heatmap-opacity": 0.8,
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(42, 62, 80, 0)", // transparente
              0.2,
              "rgba(53, 79, 112, 0.4)", // var(--active)
              0.4,
              "rgba(26, 46, 72, 0.6)", // var(--foreground)
              0.6,
              "rgba(76, 117, 153, 0.8)", // tom intermediário harmônico
              0.8,
              "rgba(44, 62, 80, 0.9)", // var(--terciary)
              1,
              "rgba(26, 46, 72, 1)", // var(--foreground)
            ],
          },
        });
      });

      map.current.on("move", () => {
        if (map.current) {
          setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
          setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
          setZoom(parseFloat(map.current.getZoom().toFixed(2)));
        }
      });
    }
  }, [lng, lat, zoom]);

  // Função para centralizar no usuário
  const centralizarNoUsuario = () => {
    if (navigator.geolocation && map.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.current!.flyTo({ center: [longitude, latitude], zoom: 12 });
        },
        (error) => {
          alert("Não foi possível obter sua localização.");
        }
      );
    } else {
      alert("Geolocalização não suportada.");
    }
  };

  return (
    <div className="w-full h-[300px] md:h-[600px] rounded-xl overflow-hidden shadow-md relative">
      {/* Botões de controle do mapa no canto inferior direito */}
      <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 bg-white/80 rounded-lg shadow p-2">
        <button
          aria-label="Centralizar na minha localização"
          className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-200 transition"
          onClick={centralizarNoUsuario}
        >
          <span className="text-xl">🎯</span>
        </button>
        <button
          aria-label="Zoom in"
          className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-200 transition"
          onClick={() => {
            if (map.current) {
              map.current.zoomIn();
            }
          }}
        >
          <span className="text-2xl font-bold">+</span>
        </button>
        <button
          aria-label="Zoom out"
          className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-200 transition"
          onClick={() => {
            if (map.current) {
              map.current.zoomOut();
            }
          }}
        >
          <span className="text-2xl font-bold">-</span>
        </button>
      </div>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
