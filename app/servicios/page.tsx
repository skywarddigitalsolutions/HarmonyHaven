import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import Image from 'next/image';
import Head from 'next/head';

const services = [
  { name: 'Masajes', description: 'Bienestar corporal', href: '/servicios/masajes', imageSrc: '/masajes.webp' },
  { name: 'Podología', description: 'Cuidado y alivio para pies y uñas', href: '/servicios/podologia', imageSrc: '/podologia.webp' },
  { name: 'Reflexología', description: 'Estimulación de puntos en los pies para equilibrar el cuerpo', href: '/servicios/reflexologia', imageSrc: '/reflexologia.webp' },
  { name: 'Rehabilitación', description: 'Recuperación de funciones físicas mediante ejercicios y terapias', href: '/servicios/rehabilitacion', imageSrc: '/rehabilitacion.webp' },
  { name: 'Traumatología', description: 'Tratamiento de lesiones', href: '/servicios/traumatologia', imageSrc: '/traumatologia.webp' },
];

export default function IndexServicios() {
  return (
    <>
      <Head>
        <title>Servicios del Centro Integral de Rehabilitación| Harmony Haven</title>
        <meta name="description" content="Descubre nuestros servicios de masajes, podología, reflexología, rehabilitación y traumatología. Ofrecemos bienestar corporal y tratamientos especializados para tu salud." />
        <meta name="keywords" content="masajes, podología, reflexología, rehabilitación, traumatología, salud, bienestar" />
        <meta property="og:title" content="Servicios de Bienestar y Salud | Nombre del Sitio" />
        <meta property="og:description" content="Ofrecemos una variedad de servicios para tu salud y bienestar. Descubre nuestros tratamientos especializados." />
        <meta property="og:url" content="https://harmonyhaven.com.ar/servicios" />
      </Head>
      
      <Navbar />
      
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-verde py-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a 
                key={service.name} 
                href={service.href} 
                className="relative group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label={`Más información sobre ${service.name}`}
              >
                <Image
                  src={service.imageSrc}
                  alt={`Imagen de ${service.name}`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover filter brightness-90"
                  placeholder="blur" 
                  blurDataURL={service.imageSrc} 
                />
                <div className="absolute inset-0" />
                <div className="relative p-6 bg-verde h-40 flex flex-row text-white">
                  <div>
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <p className="mt-2">{service.description}</p>
                  </div>
                  <span className="absolute bottom-6 right-6 text-lg font-semibold transition-colors duration-300 group-hover:text-naranja">
                    <ChevronRightIcon className="h-6 w-6" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
