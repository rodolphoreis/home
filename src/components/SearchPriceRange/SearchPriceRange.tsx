import { useContext, useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";
import { Context } from "../../../context/FilterContext";

export function SearchPriceRange() {
  const { filters, setFilters } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  function handlePriceRange(range: [number, number]) {
    setFilters({ ...filters, priceRange: range });
    setIsOpen(true);
  }

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <GrTag />
      <div>
        <p>Margem de preço</p>
        <p className="hidden md:block text-xs">Selecione sua margem de preço</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p onClick={() => handlePriceRange([0, 1000000])}>Qualquer preço</p>
          <p onClick={() => handlePriceRange([200000, 300000])}>
            200.000€ - 400.000€
          </p>
          <p onClick={() => handlePriceRange([100000, 200000])}>
            100.000€ - 200.000€
          </p>
          <p onClick={() => handlePriceRange([50000, 100000])}>
            50.000€ - 100.000€
          </p>
        </div>
      )}
    </div>
  );
}
