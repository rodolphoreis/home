import { useContext, useState } from "react";
import { GrFormDown, GrLocation, GrFormUp } from "react-icons/gr";
import { Context } from "../../../context/FilterContext";
import { dataProperties } from "../Properties/Properties.data";

export function SearchLocation() {
  const { filters, setFilters } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const uniqueLocations = Array.from(
    new Set(dataProperties.map((item) => item.location.split(",")[0]))
  );

  function handleFilterLocation(location: string) {
    setFilters({ ...filters, location });
    setIsOpen(true);
  }

  function handleNavigate() {
    setFilters({ location: "", star: [0, 10], priceRange: [0, 1000000] });
  }

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <GrLocation />
      <div>
        <p>Localização</p>
        <p className="hidden md:block text-xs">Selecione sua Localização</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p onClick={handleNavigate}>Ver todas</p>
          {uniqueLocations.map((location, index) => (
            <p key={index} onClick={() => handleFilterLocation(location)}>
              {location}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
