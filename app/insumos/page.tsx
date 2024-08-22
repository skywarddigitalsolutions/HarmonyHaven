import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { FaWhatsapp } from "react-icons/fa";
import { Contact } from "../componentes/contacto-btn";

export default function InsumosOrtopedicos() {
    const productos = [
        {
            nombre: "Bota Walker",
            descripcion: "Ideal para inmovilizar y proteger el pie y el tobillo tras una lesión o cirugía.",
            imagen: "/imagenes/bota-walker.jpg",
        },
        {
            nombre: "Inmovilizador de Muñeca",
            descripcion: "Proporciona soporte y estabilidad para la muñeca después de lesiones o cirugías.",
            imagen: "/imagenes/inmovilizador-muneca.jpg",
        },
        {
            nombre: "Inmovilizador de Codo",
            descripcion: "Ayuda a inmovilizar y proteger el codo para una recuperación rápida.",
            imagen: "/imagenes/inmovilizador-codo.jpg",
        },
        {
            nombre: "Inmovilizador de Hombro: Cabestrillo",
            descripcion: "Soporte para el hombro y el brazo, ideal para lesiones y recuperación postoperatoria.",
            imagen: "/imagenes/cabestrillo.jpg",
        },
        {
            nombre: "Inmovilizador de Rodilla con Varillas",
            descripcion: "Ofrece inmovilización completa de la rodilla para garantizar una recuperación adecuada.",
            imagen: "/imagenes/inmovilizador-rodilla.jpg",
        },
        {
            nombre: "Andadores con o sin Ruedas",
            descripcion: "Diseñados para proporcionar apoyo y movilidad segura para personas con dificultades de equilibrio.",
            imagen: "/imagenes/andador.jpg",
        },
        {
            nombre: "Muletas",
            descripcion: "Ayudan a caminar con seguridad y estabilidad tras una lesión o cirugía.",
            imagen: "/imagenes/muletas.jpg",
        },
        {
            nombre: "Sillas de Ruedas",
            descripcion: "Sillas de ruedas cómodas y duraderas para movilidad diaria.",
            imagen: "/imagenes/silla-ruedas.jpg",
        },
        {
            nombre: "Bastones",
            descripcion: "Soporte adicional para caminar, ideal para personas mayores o con movilidad reducida.",
            imagen: "/imagenes/baston.jpg",
        },
        {
            nombre: "Trípodes",
            descripcion: "Ofrecen mayor estabilidad que los bastones tradicionales para personas con movilidad reducida.",
            imagen: "/imagenes/tripode.jpg",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 relative py-12" id="body">

                {/* Imagen de fondo */}
                <div className="relative">
                    <img src="../../fotoinfo.jpg" className="object-cover w-full h-[25vh] opacity-80 rounded-2xl" alt="Insumos Ortopédicos" />

                    {/* Fondo con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white opacity-90"></div>

                    {/* Contenido de la sección */}
                    <div className="relative z-10 pt-12 pb-12 text-center max-w-5xl mx-auto px-4">
                        <h2 className="text-4xl lg:text-6xl text-verde font-bold mb-4">Insumos Ortopédicos</h2>
                        <h5 className="text-lg text-verdeclaro mb-5">Soluciones para tu comodidad y movilidad</h5>
                        <p className="text-verdeoscuro text-lg mb-6 mx-4 lg:mx-0">
                            Explora nuestra variedad de insumos ortopédicos, diseñados para brindar soporte, comodidad y facilitar la recuperación de lesiones. Contáctanos por WhatsApp para realizar tu pedido.
                        </p>
                    </div>
                </div>

                {/* Productos */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-12 py-5 gap-6 px-5 lg:px-10">
                    {productos.map((producto, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover mb-4 rounded-md" />
                            <h4 className="text-xl font-semibold text-verdeoscuro mb-2">{producto.nombre}</h4>
                            <p className="text-sm text-gray-700 mb-4">{producto.descripcion}</p>
                            <a 
                                href={`https://wa.me/?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(producto.nombre)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-verde text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-verdeoscuro"
                            >
                                <FaWhatsapp className="mr-2" /> Consultar por WhatsApp
                            </a>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
            <Contact />
        </>
    );
}
