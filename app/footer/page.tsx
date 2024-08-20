'use client'

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="bg-verde text-white py-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Columna de Información */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Centro Integral de Rehabilitación</h3>
            <p className="mb-4">
              Estamos dedicados a ofrecerte el mejor cuidado y atención para tu rehabilitación. Contáctanos para más información sobre nuestros servicios.
            </p>
            <p className="mb-4">
              <strong>Teléfono:</strong> (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Email:</strong> contacto@rehabilitacion.com
            </p>
            <p>
              <strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País
            </p>
          </div>
          {/* Columna de Enlaces */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menú de navegación</h3>
            <ul>
              <li><a href="#home" className="hover:underline">Inicio</a></li>
              <li><a href="#servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#testimonios" className="hover:underline">Insumos ortopédicos</a></li>
              <li><a href="#contacto" className="hover:underline">Nosotros</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          {/* Columna de Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#">
                <FaInstagram className="h-7 w-7" />
              </a>
              <a href="#">
                <FaFacebook className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sección del fondo oscuro */}
    </footer>
    <div className="bg-verdeoscuro py-5 text-verdeclaro">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Hecho por Skyward Digital Solutions. Todos los derechos reservados.</p>
        </div>
    </div>
      </>
  );
}
