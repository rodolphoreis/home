import { useState } from "react";
import { GrFormDown, GrLocation, GrFormUp } from "react-icons/gr";

export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curssor-pointer"
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
          <p>Porto</p>
          <p>Lisboa</p>
          <p>Guimarães</p>
          <p>Aveiro</p>
          <p>Setúbal</p>
          <p>Faro</p>
        </div>
      )}
    </div>
  );
}
