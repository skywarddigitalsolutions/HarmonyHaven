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
            <div className="flex items-center gap-1">
              <img src="../logo.svg" className="h-12"/>
              <h3 className="text-2xl font-semibold my-4">Harmony Haven</h3>
            </div>
            <p className="mb-4">
              Estamos dedicados a ofrecerte el mejor cuidado y atención para tu rehabilitación. Contáctanos para más información sobre nuestros servicios.
            </p>
          </div>
          {/* Columna de Enlaces */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menú de navegación</h3>
            <ul>
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/servicios" className="hover:underline">Servicios</a></li>
              <li><a href="/insumos" className="hover:underline">Insumos ortopédicos</a></li>
              <li><a href="/nosotros" className="hover:underline">Nosotros</a></li>
              <li><a href="/contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          {/* Columna de Redes Sociales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="instagram.com/harmonyhavenba">
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
          <p>&copy; {new Date().getFullYear()} Hecho por {" "}
          <a
            href="https://sds.com.ar"
            className="text-crema hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skyward Digital Solutions
          </a>. Todos los derechos reservados.</p>
        </div>
    </div>
      </>
  );
}
