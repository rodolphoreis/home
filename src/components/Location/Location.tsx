"use client";
import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Transition } from "../Transition";
import { MarkerHouse } from "./MarkerHouse";

export function Location() {
  const coordinatePoint = {
    lat: 39.5,
    lng: -8.0,
  };

  const centerMarker = (position: { lat: number; lng: number }, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng,
    });
  };

  return (
    <Transition className="px-4 py-8 md:px-36 md:py-24 ">
      <h4 className="text-center text-secondary" id="location">
        Localização
      </h4>
      <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">
        Moradias disponíveis em todo Portugal, oferecendo conforto e praticidade
        em diversas regiões para atender às suas necessidades.
      </h2>
      <MapContainer
        center={coordinatePoint}
        zoom={6}
        scrollWheelZoom={false}
        className=" h-[700px]"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
        <MarkerHouse selectMarker={centerMarker} />
      </MapContainer>
    </Transition>
  );
}
