import { useContext, useState } from "react";
import { GrFormDown, GrFormUp } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { Context } from "../../../context/FilterContext";

export function SearchProperty() {
  const [isOpen, setIsOpen] = useState(false);
  const { filters, setFilters } = useContext(Context);

  function handleFilterLocation(star: [number, number]) {
    setFilters({ ...filters, star });
    setIsOpen(true);
  }

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curssor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <FaRegStar size={20} />
      <div>
        <p>Classificação</p>
        <p className="hidden md:block text-xs">Selecione pelas estrelas</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}

      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p onClick={() => handleFilterLocation([0, 5])}>
            Qualquer quantidade
          </p>
          <p onClick={() => handleFilterLocation([0, 2])}>0 - 2</p>
          <p onClick={() => handleFilterLocation([2, 4])}>2 - 4</p>
          <p onClick={() => handleFilterLocation([5, 10])}>5 ou mais</p>
        </div>
      )}
    </div>
  );
}
