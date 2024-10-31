import Image from "next/image";

export function Form() {
  return (
    <div className="px-3 flex-1">
      <div className="py-4 px-3 rounded-lg shadow-light">
        <div className="flex gap-4">
          <Image
            src="/assets/comercial.jpg"
            alt="comercial"
            width={50}
            height={50}
            className="border-2 border-secondary rounded-full h-14 w-14"
          />
          <div>
            <p className="font-extrabold">Rodolpho Reis</p>
            <p className="text-secondary font-medium mt-[-5px] text-sm">
              Comercial
            </p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <label className="text-sm text-secondary">Nome</label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 placeholder:px-2 focus:ring-0 focus:ring-inset  text-sm"
                placeholder="Digite seu nome"
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="text-sm text-secondary ">Telefone</label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="number"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 placeholder:px-2 focus:ring-0 focus:ring-inset  text-sm"
                placeholder="Digite seu telefone"
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="text-sm text-secondary ">Descrição</label>
            <div className="mt-2">
              <textarea
                name="descricao"
                rows={3}
                defaultValue={""}
                className="w-full rounded-md text-sm border-0  py-1.5 text-secondary shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 placeholder:px-2 focus:ring-0 focus:ring-inset "
                placeholder="Digite seu telefone"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 my-4">
            <button className="bg-secondary px-4 py-2 text-white rounded-lg text-sm">
              Enviar mensagem
            </button>
            <button className="border-[1px] border-secondary text-secondary px-2 py-2 rounded-lg text-sm">
              Chamar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
