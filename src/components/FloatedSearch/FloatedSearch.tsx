import { SearchButton } from "../SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchPriceRange } from "../SearchPriceRange";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";

export function FloatedSearch() {
  return (
    <Transition className="absolute bottom-4 md:-bottom-10 left-0 right-0 w-[75%] mx-auto">
      <div className="flex-col px-4 justify-between gap-4 py-4 bg-white rounded-md md:flex md:flex-row backdrop-blur shadow-light">
        <SearchLocation />
        <SearchProperty />
        <SearchPriceRange />
        <SearchButton />
      </div>
    </Transition>
  );
}
