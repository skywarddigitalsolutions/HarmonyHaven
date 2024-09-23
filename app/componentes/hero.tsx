import Image from "next/image";
import "./hero.css";
import Fondo from "../../public/fondo.webp"
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center lg:mt-12 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={Fondo}
          alt="Centro Integral de Rehabilitación"
          className="w-full h-full object-cover opacity-60"
          priority 
        />
      </div>
      <div className="relative text-center" id="cuadradotexto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Centro Integral de Rehabilitación
        </h1>
        <h4 className="text-white text-md md:text-lg lg:text-xl mb-8">
          Tratamientos integrales y personalizados para una rehabilitación efectiva. Cuidamos de ti en cada paso del proceso.
        </h4>
        <div className="flex justify-center">
          <Link href={"https://wa.me/+5491155111262?text=Hola,%20quiero%20reservar%20un%20turno%20para%20`"} target="_blank">
          <button className="buttonhero">
            <span className="spanhero">Contáctanos</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
