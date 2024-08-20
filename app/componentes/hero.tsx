import "./hero.css";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center mt-12 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./fondo.jpg"
          alt="Fondo"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative text-center px-6 md:px-0" id="cuadradotexto">
        <h1 className="text-white text-xl md:text-6xl font-bold mb-4">
          El refugio de tu armonía
        </h1>
        <h4 className="text-white text-md md:text-xl mb-8">
          Un espacio para encontrar paz y equilibrio
        </h4>
        <div className="flex justify-center">
          <button className="buttonhero">
            <span className="spanhero">Contactanos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
