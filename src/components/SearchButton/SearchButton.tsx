import { RiSearch2Line } from "react-icons/ri";
export function SearchButton() {
  return (
    <div className="gap-4 border-[1px] rounded-lg px-14 py-2 bg-secondary flex items-center text-white justify-center">
      <span className="font-medium">Buscar</span>
      <RiSearch2Line />
    </div>
  );
}
