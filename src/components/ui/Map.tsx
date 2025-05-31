"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "SEU_TOKEN_MAPBOX_AQUI";

export function Map({ latitude = -22.8920329, longitude = -47.2327026 }: { latitude?: number; longitude?: number }) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(6.15);
  const [pontos, setPontos] = useState([
    [-47.033765, -22.931022],
    [-47.046382, -22.936576],
    [-47.093385, -22.939408],
    [-47.089117, -22.887987],
    [-47.038174, -22.883719],
    [-47.097921 , -22.919236],
    [-47.064382, -22.888512],
  ]);

  const updateMapSources = () => {
    const features = pontos.map((coord) => ({
      type: "Feature" as const,
      geometry: { type: "Point" as const, coordinates: coord },
      properties: {},
    }));

    const geojson: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
      type: "FeatureCollection",
      features,
    };

    const source = map.current?.getSource(
      "pontos-heatmap"
    ) as mapboxgl.GeoJSONSource;
    if (source) {
      source.setData(geojson);
    }

    const circleSource = map.current?.getSource(
      "pontos-circulos"
    ) as mapboxgl.GeoJSONSource;
    if (circleSource) {
      circleSource.setData(geojson);
    }
  };

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style:
        process.env.NEXT_PUBLIC_MAPBOX_STYLE ||
        "mapbox://styles/mapbox/light-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      const features: GeoJSON.Feature<GeoJSON.Point>[] = pontos.map((coord) => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: coord },
        properties: {},
      }));

      const geojson: GeoJSON.FeatureCollection<GeoJSON.Point> = {
        type: "FeatureCollection",
        features,
      };

      map.current!.addSource("pontos-heatmap", {
        type: "geojson",
        data: geojson,
      });
      map.current!.addSource("pontos-circulos", {
        type: "geojson",
        data: geojson,
      });

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
          ],
          "heatmap-opacity": 0.8,
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(42, 62, 80, 0)",
            0.2,
            "rgba(53, 79, 112, 0.4)",
            0.4,
            "rgba(26, 46, 72, 0.6)",
            0.6,
            "rgba(76, 117, 153, 0.8)",
            0.8,
            "rgba(44, 62, 80, 0.9)",
            1,
            "rgba(26, 46, 72, 1)",
          ],
        },
      });

      map.current!.addLayer({
        id: "circulos",
        type: "circle",
        source: "pontos-circulos",
        paint: {
          "circle-radius": {
            stops: [
              [5, 10],
              [15, 50],
            ],
          },
          "circle-color": "rgba(26, 46, 72, 0.2)",
          "circle-stroke-color": "rgba(26, 46, 72, 0.8)",
          "circle-stroke-width": 2,
        },
      });

      pontos.forEach((coord) => {
        const el = document.createElement("div");
        el.style.backgroundImage = "url('/pin.svg')";
        el.style.width = "25px";
        el.style.height = "25px";
        el.style.backgroundSize = "contain";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundPosition = "center";
        el.style.cursor = "pointer";

        new mapboxgl.Marker({ element: el })
          .setLngLat(coord as [number, number])
          .addTo(map.current!);
      });
    });

    map.current.on("move", () => {
      if (!map.current) return;
      setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current.getZoom().toFixed(2)));
    });
  }, []);

  useEffect(() => {
    if (!map.current) return;

    if ((map.current as any)._customMarkers) {
      (map.current as any)._customMarkers.forEach((marker: mapboxgl.Marker) =>
        marker.remove()
      );
    }
    (map.current as any)._customMarkers = [];

    pontos.forEach((coord) => {
      const el = document.createElement("div");
      el.style.backgroundImage = "url('/pin.svg')";
      el.style.width = "25px";
      el.style.height = "25px";
      el.style.backgroundSize = "contain";
      el.style.backgroundRepeat = "no-repeat";
      el.style.backgroundPosition = "center";
      el.style.cursor = "pointer";

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(coord as [number, number])
        .addTo(map.current!);

      (map.current as any)._customMarkers.push(marker);
    });
  }, [pontos]);

  useEffect(() => {
    if (map.current) updateMapSources();
  }, [pontos]);

  useEffect(() => {
    setLat(latitude);
    setLng(longitude);
    if (map.current) {
      map.current.flyTo({ center: [longitude, latitude], zoom: 12 });
    }
  }, [latitude, longitude]);

  const adicionarPonto = () => {
    // Aumenta a randomização para até ~0.05 graus (~5km)
    const novoPonto = [
      lng + (Math.random() - 0.5) * 0.1,
      lat + (Math.random() - 0.5) * 0.1,
    ];
    setPontos((prev) => [...prev, novoPonto]);
  };

  const centralizarNoUsuario = () => {
    if (navigator.geolocation && map.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude); 
          setLng(longitude); 
          map.current!.flyTo({ center: [longitude, latitude], zoom: 12 });
        },
        () => {
          alert("Não foi possível obter sua localização.");
        }
      );
    }
  };

  return (
    <div className="w-full h-[300px] md:h-[600px] rounded-xl overflow-hidden shadow-md relative">
      <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 p-2">
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg">
          <button
            onClick={adicionarPonto}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/10 transition"
            title="Adicionar ponto"
          >
            <Image
              src="/pin-marker.svg"
              alt="Adicionar ponto"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex flex-col gap-2 bg-white/80 rounded-lg shadow p-2">
          <button
            onClick={centralizarNoUsuario}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-200 transition"
            title="Centralizar"
          >
            <Image src="/target.svg" alt="Centralizar" width={24} height={24} />
          </button>
          <button
            onClick={() => map.current?.zoomIn()}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-200 transition"
            title="Zoom in"
          >
            <Image src="/zoom-in.svg" alt="Zoom in" width={24} height={24} />
          </button>
          <button
            onClick={() => map.current?.zoomOut()}
            className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-200 transition"
            title="Zoom out"
          >
            <Image src="/zoom-out.svg" alt="Zoom out" width={24} height={24} />
          </button>
        </div>
      </div>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}