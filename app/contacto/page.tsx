"use client";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import { Contact } from "../componentes/contacto-btn";

export default function Contacto() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Crear el mensaje de WhatsApp con los datos del formulario
        const mensajeWhatsApp = `Hola, me llamo ${nombre}. Mi consulta es: ${mensaje}`;
        const urlWhatsApp = `https://wa.me/+5491155111262?text=${encodeURIComponent(mensajeWhatsApp)}`;

        // Redirigir al usuario a WhatsApp
        window.location.href = urlWhatsApp;
    };

    return (
        <>
            <Navbar />
            <div className="relative my-12 bg-gray-100 py-12 px-4 lg:px-10">
                
                {/* Título de la sección */}
                <div className="text-center mb-12 flex flex-col justify-center items-center">
                    <h2 className="text-4xl lg:text-5xl text-verde font-bold mb-4">Contáctanos</h2>
                    <p className="text-lg text-gray-600 max-w-2xl text-center">
                        Estamos aquí para ayudarte en tu camino hacia la recuperación. Si tienes alguna consulta o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.
                    </p>
                </div>

                {/* Contenedor general con borde redondeado */}
                <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">

                    {/* Formulario de contacto */}
                    <div className="bg-white p-8 lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-verde mb-4">Envíanos un Mensaje</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-verde focus:border-verde"
                                />
                            </div>
                            <div>
                                <label htmlFor="consulta" className="block text-sm font-medium text-gray-700">Consulta</label>
                                <textarea
                                    name="consulta"
                                    id="consulta"
                                    rows= {4}
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    required
                                    className="mt-1 block w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-verde focus:border-verde"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-verde hover:bg-verdeoscuro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verdeoscuro"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Información de contacto con fondo verde claro */}
                    <div className="bg-verdeclaro p-8 text-white lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-12">Información de Contacto</h3>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-2xl mr-4" />
                            <p>Fray Martínez 491, San Miguel del Monte, Argentina</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-2xl mr-4" />
                            <p>+5491155111262</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaInstagram className="text-2xl mr-4" />
                            <a href="https://instagram.com/harmonyhavenba" target="_blank" rel="noopener noreferrer" className="hover:text-verdeoscuro">
                                @harmonyhavenba
                            </a>
                        </div>
                        <div className="flex items-center">
                            <FaWhatsapp className="text-2xl mr-4" />
                            <a href="https://wa.me/5491155111262" target="_blank" rel="noopener noreferrer" className="hover:text-verdeoscuro">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Mapa embebido */}
                <div className="text-center mt-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.4939441053234!2d-58.80949112441938!3d-35.44256407266533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd693d70e7617b%3A0x5333ae4ce65b7acb!2sFray%20Francisco%20Mart%C3%ADnez%20491%2C%20B2270%20San%20Miguel%20del%20Monte%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1724807183257!5m2!1ses-419!2sar"
                        className="w-full h-[400px] rounded-lg border-none"
                        loading="lazy"
                        title="Mapa de ubicación"
                    ></iframe>
                </div>
            </div>
            <Footer />
            <Contact />
        </>
    );
}
