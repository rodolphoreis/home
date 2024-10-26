import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container relative mx-auto">
      <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-4xl px-2 md:px-0 md:text-5xl font-semibold">
            Descubra a casa ideal para tua família em todo Portugal
          </h2>
          <p className="mt-5 text-lg px-2 md:px-0 md:text-xl md:mt-8">
            Com mais de 30 anos de experiência, a MyHome reúne os melhores
            profissionais para atender a todas as suas necessidades.
          </p>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
