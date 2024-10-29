import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
  return (
    <Transition className="grid gap-8 px-4 py-6 md:py-24 md:px-36 md:grid-cols-2 ">
      <div className="flex flex-col justify-center max-w-xl mb-7 " id="about">
        <h4 className="text-secondary">Sobre nós</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Mais de 1.000 casas vendidas nos últimos 2 anos
        </h2>
        <p className="mb-10 mt-7">
          Com mais de uma década de experiência no mercado imobiliário, somos
          especialistas em propriedades de alto padrão. Nossa equipe é composta
          por profissionais dedicados que conhecem cada detalhe do setor,
          garantindo um serviço excepcional e personalizado. Trabalhamos
          incansavelmente para ajudar nossos clientes a encontrar o lar dos seus
          sonhos, oferecendo um portfólio diversificado e acesso às melhores
          oportunidades do mercado. Aqui, a qualidade e a satisfação do cliente
          são nossas prioridades.
        </p>
        <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">
          Carregar mais
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/house.jpeg"
          alt="About"
          width={450}
          height={550}
          className="w-auto h-auto rounded-md md:h-[530px]"
          priority
        />
      </div>
    </Transition>
  );
}
