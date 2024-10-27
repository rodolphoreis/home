import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curssor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <GrTag />
      <div>
        <p>Margem de preço</p>
        <p className="text-xs">Selecione sua margem de preço</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}

      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p>Qualquer preço</p>
          <p>20.000€ - 30.000€</p>
          <p>10.000€ - 20.000€</p>
          <p>5.000€ - 10.000€</p>
        </div>
      )}
    </div>
  );
}
