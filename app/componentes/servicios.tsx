
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const services = [
  { name: 'Masajes', description: 'Bienestar corporal', href: '/servicios/masajes', imageSrc: './masajes.webp' },
  { name: 'Podología', description: 'Cuidado y alivio para pies y uñas', href: '/servicios/podologia', imageSrc: './podologia.webp' },
  { name: 'Reflexología', description: 'Estimulación de puntos en los pies para equilibrar el cuerpo', href: '/servicios/reflexologia', imageSrc: './reflexologia.webp' },
  { name: 'Rehabilitación', description: 'Recuperación de funciones físicas mediante ejercicios y terapias', href: '/servicios/rehabilitacion', imageSrc: './rehabilitacion.webp' },
  { name: 'Traumatología', description: 'Tratamiento de lesiones', href: '/servicios/traumatologia', imageSrc: './traumatologia.webp' },
];

export default function IndexServicios() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-verde mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a key={service.name} href={service.href} className="relative group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={service.imageSrc} 
                alt={service.name} 
                className="w-full h-48 object-cover filter brightness-90" 
              />
              <div className="absolute inset-0" />
              <div className="relative p-6 bg-verde h-40 flex flex-row text-white">
                <div>
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <p className="mt-2">{service.description}</p>
                </div>
                <span className="absolute bottom-6 right-6 text-lg font-semibold group-hover:text-naranja">
                  <ChevronRightIcon className="h-6 w-6" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
