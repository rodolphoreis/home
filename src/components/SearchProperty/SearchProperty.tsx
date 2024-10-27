import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curssor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <GrHome />
      <div>
        <p>Propriedade</p>
        <p className="text-xs">Selecione o tipo da propriedade</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}

      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p>Apartamento</p>
          <p>Vivenda</p>
          <p>Quinta</p>
          <p>Casa</p>
        </div>
      )}
    </div>
  );
}
