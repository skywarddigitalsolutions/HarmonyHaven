import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { FaWhatsapp } from "react-icons/fa";
import { Contact } from "../componentes/contacto-btn";
import Head from "next/head";
export default function InsumosOrtopedicos() {
    const productos = [
        {
            nombre: "Bota Walker",
            descripcion: "Ideal para inmovilizar y proteger el pie y el tobillo tras una lesión o cirugía.",
            imagen: "./bota-walker.webp",
        },
        {
            nombre: "Inmovilizador de Muñeca",
            descripcion: "Proporciona soporte y estabilidad para la muñeca después de lesiones o cirugías.",
            imagen: "./inmovilizador-muneca.webp",
        },
        {
            nombre: "Inmovilizador de Codo",
            descripcion: "Ayuda a inmovilizar y proteger el codo para una recuperación rápida.",
            imagen: "./inmovilizador-codo.webp",
        },
        {
            nombre: "Inmovilizador de Hombro: Cabestrillo",
            descripcion: "Soporte para el hombro y el brazo, ideal para lesiones y recuperación postoperatoria.",
            imagen: "./hombro.webp",
        },
        {
            nombre: "Inmovilizador de Rodilla con Varillas",
            descripcion: "Ofrece inmovilización completa de la rodilla para garantizar una recuperación adecuada.",
            imagen: "./inmovilizador-rodilla.webp",
        },
        {
            nombre: "Andadores con o sin Ruedas",
            descripcion: "Diseñados para proporcionar apoyo y movilidad segura para personas con dificultades de equilibrio.",
            imagen: "./andador.webp",
        },
        {
            nombre: "Muletas",
            descripcion: "Ayudan a caminar con seguridad y estabilidad tras una lesión o cirugía.",
            imagen: "./muletas.webp",
        },
        {
            nombre: "Sillas de Ruedas",
            descripcion: "Sillas de ruedas cómodas y duraderas para movilidad diaria.",
            imagen: "./silla-ruedas.webp",
        },
        {
            nombre: "Bastones",
            descripcion: "Soporte adicional para caminar, ideal para personas mayores o con movilidad reducida.",
            imagen: "./baston.webp",
        },
        {
            nombre: "Trípodos",
            descripcion: "Ofrecen mayor estabilidad que los bastones tradicionales para personas con movilidad reducida.",
            imagen: "./baston2.webp",
        },
    ];

    return (
        <>
            <Head>
                <title>Insumos Ortopédicos - Soluciones para tu Movilidad y Comodidad</title>
                <meta name="description" content="Descubre nuestra variedad de insumos ortopédicos para facilitar la recuperación de lesiones y mejorar la movilidad. Contáctanos por WhatsApp para más información." />
                <meta name="keywords" content="insumos ortopédicos, bota walker, muletas, andadores, sillas de ruedas, inmovilizador de muñeca, inmovilizador de rodilla" />
                <meta name="author" content="Harmony Haven" />
                <meta property="og:title" content="Insumos Ortopédicos - Soluciones para tu Movilidad" />
                <meta property="og:description" content="Variedad de productos ortopédicos diseñados para tu comodidad. Contáctanos para realizar tu pedido." />
                <meta property="og:url" content="https://www.harmonyhaven.com.ar/insumos-ortopedicos" />
            </Head>
            <Navbar />
            <div className="bg-gray-100 relative py-12" id="body">

                {/* Imagen de fondo */}
                <div className="relative">
                    <img src="../../insumos.webp" className="object-cover w-full h-[25vh] filter brightness-50 rounded-2xl" alt="Insumos Ortopédicos" />

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 py-5 gap-6 px-5 lg:px-10">
                    {productos.map((producto, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col h-full">
                            <div className="flex flex-col flex-grow text-center">
                                <img src={producto.imagen} alt={producto.nombre} className="h-96 w-full object-cover mb-4 rounded-md mx-auto" />
                                <h4 className="text-xl font-semibold text-verdeoscuro mb-2">{producto.nombre}</h4>
                                <p className="text-sm text-gray-700 mb-4">{producto.descripcion}</p>
                            </div>
                            <div className="flex justify-center mt-auto">
                                <a 
                                    href={`https://wa.me/?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(producto.nombre)}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-verde text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-verdeoscuro"
                                >
                                    <FaWhatsapp className="mr-2" /> Consultar por WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
            <Contact />
        </>
    );
}
