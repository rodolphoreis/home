import Image from "next/image";
import Link from "next/link";

export function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-semibold mb-6">Error 404</h1>
      <h2 className="text-3xl mb-5">
        {" "}
        Não encontramos a casa dos seus sonhos... ainda! Mas estamos aqui para
        ajudar.
      </h2>
      <Image
        src={"/assets/404-not-found.jpg"}
        alt="Not Found"
        width={600}
        height={450}
        className="rounded-lg shadow-lightad"
      />
      <div className="text-center mt-5">
        <Link href="/" className="px-3 py-2 bg-secondary text-white rounded-lg">
          Voltar a Home
        </Link>
      </div>
    </div>
  );
}
