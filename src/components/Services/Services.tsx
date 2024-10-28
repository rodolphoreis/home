"use client";

import { Transition } from "../Transition";
import { Slider } from "./Slider";

export function Services() {
  return (
    <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
      <div className="max-w-xl mb-7">
        <h4 className="text-secondary md:text-xl">Serviços</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Promova a sua casa para alugar ou vender ao melhor preço
        </h2>
        <p className="mb-10 mt-7">
          Nosso serviço combina uma abordagem inovadora de marketing imobiliário
          com um conhecimento profundo do mercado, garantindo que a sua
          propriedade alcance o público certo. Oferecemos suporte completo desde
          a avaliação e divulgação até a negociação final, com o objetivo de
          maximizar o valor da sua propriedade e reduzir o tempo de venda ou
          locação. Confie em nossa experiência para transformar o seu imóvel em
          uma oportunidade de destaque no mercado.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Slider />
      </div>
    </Transition>
  );
}
