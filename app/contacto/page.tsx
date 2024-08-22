"use client";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';
import { Contact } from "../componentes/contacto-btn";

export default function Contacto() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear el mensaje de WhatsApp con los datos del formulario
        const mensajeWhatsApp = `Hola, me llamo ${nombre}. Mi mensaje es: ${mensaje}`;
        const urlWhatsApp = `https://wa.me/+5491155111262?text=${encodeURIComponent(mensajeWhatsApp)}`;

        // Redirigir al usuario a WhatsApp
        window.location.href = urlWhatsApp;
    };

    return (
        <>
            <Navbar />
            <div className="relative my-12 bg-gray-100 py-12 px-4 lg:px-10">
                
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl text-verde font-bold mb-4">Contáctanos</h2>
                    <p className="text-lg text-gray-600">
                        ¿Tienes preguntas o necesitas asistencia? Estamos aquí para ayudarte. Elige cómo prefieres contactarnos.
                    </p>
                </div>

                {/* Contenedor general con borde redondeado */}
                <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-lg">

                    {/* Información de contacto con fondo verde claro */}
                    <div className="bg-verdeclaro p-8 text-white lg:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
                        <p className="mb-6">
                            Utiliza cualquiera de los siguientes medios para ponerte en contacto con nosotros. Estamos disponibles para atender tus consultas.
                        </p>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-2xl mr-4" />
                            <p>123 Calle Falsa, Ciudad, País</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-2xl mr-4" />
                            <p>+123 456 7890</p>
                        </div>
                        <div className="flex items-center">
                            <FaWhatsapp className="text-2xl mr-4" />
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-verde">
                                +123 456 7890
                            </a>
                        </div>
                    </div>
                    
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
                                    rows="4"
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
                </div>
                
                {/* Mapa embebido (opcional) */}
                <div className="text-center mt-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.168572174758!2d-122.4194154!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbbb5cdef%3A0xa9ffedb6d7557a2e!2s123%20Calle%20Falsa%2C%20Ciudad%2C%20Pa%C3%ADs!5e0!3m2!1ses!2sar!4v1620954020509!5m2!1ses!2sar"
                        className="w-full h-[400px] rounded-lg border-none"
                        allowFullScreen=""
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
