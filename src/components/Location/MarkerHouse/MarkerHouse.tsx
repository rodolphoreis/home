import { Marker, Popup, useMap } from "react-leaflet";
import { MarkerHouseProps } from "./MarkerHouse.types";
import { icon } from "leaflet";
import { housesData } from "./MarkerHouse.data";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";

export function MarkerHouse(props: MarkerHouseProps) {
  const { selectMarker } = props;
  const fnMap = useMap();
  const customIcon = icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [15, 21],
  });
  return housesData.map(({ id, name, position, image }) => (
    <Marker
      key={id}
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: () => selectMarker(position, fnMap),
      }}
    >
      <Popup>
        <div className="flex items-center mb-2">
          <span className="mr-4 text-secondary">
            <FiMapPin />
          </span>
          <h5 className="text-md text-secondary">{name}</h5>
        </div>
        <Image
          src={`/assets/properties/${image}`}
          alt={name}
          width={100}
          height={400}
          className="w-full object-cover md:h-[180px] rounded-lg"
        />

        <button className="px-3 py-2 text-xs text-white rounded-lg bg-secondary mt-3 w-full">
          Ver propriedade
        </button>
      </Popup>
    </Marker>
  ));
}
