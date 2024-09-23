export default function IndexContacto() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-verdeclaro px-6 pt-16 shadow-2xl rounded-2xl pb-8 lg:pb-0 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-0 lg:px-0 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="1" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#2e4e4a" />
                <stop offset={1} stopColor="#2e4e4a" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md lg:ml-12 text-center lg:max-w-none lg:text-left lg:flex-1 lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para transformar tu bienestar?
            </h2>
            <p className="mt-6 text-lg leading-8 text-verdeoscuro">
              Contáctanos hoy mismo para iniciar tu camino hacia una recuperación integral. Nuestro equipo de expertos está aquí para ofrecerte el apoyo y la atención que necesitas. ¡Estamos listos para ayudarte a alcanzar tu mejor versión!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://wa.me/+5491155111262?text=Hola,%20quiero%20reservar%20un%20turno%20para%20`"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-verdeoscuro shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contactame
              </a>
              <a href="/servicios" className="text-sm font-semibold leading-6 text-white">
                Ver servicios <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <img
              alt="Transformá tu bienestar"
              src="./fotoinfo.jpg"
              width={1924}
              height={1080}
              className="w-full h-full object-cover rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
