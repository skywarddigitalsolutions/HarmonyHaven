"use client"
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import Image from 'next/image'; // Importar para manejar imágenes en Next.js

export default function Nosotros() {
    return (
        <>
            <Navbar />
            <div className="relative my-12 bg-gray-100 py-12 px-4 lg:px-10">
                
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl text-verde font-bold mb-4">Sobre Nosotros</h2>
                    <p className="text-lg text-gray-600">
                        Conoce más sobre nuestra misión, visión y los valores que nos definen como empresa.
                    </p>
                </div>

                {/* Contenedor principal con bordes redondeados */}
                <div className="relative flex flex-col lg:flex-row items-stretch bg-white rounded-lg overflow-hidden shadow-lg">
                    
                    {/* Información */}
                    <div className="flex-1 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-verde mb-4">Nuestra Misión</h3>
                        <p className="text-gray-700 mb-4">
                            Nuestra misión es proporcionar un entorno de atención integral donde cada paciente reciba un tratamiento personalizado y de alta calidad. Nos dedicamos a mejorar la salud y el bienestar de quienes confían en nosotros, utilizando un enfoque multidisciplinario que combina experiencia médica, innovación tecnológica y un profundo compromiso con la recuperación física y emocional de nuestros pacientes. Nuestro objetivo es ser un faro de esperanza y apoyo, guiando a cada persona en su camino hacia una vida más plena y saludable                        </p>
                        <h3 className="text-2xl font-semibold text-verde mb-4">Nuestra Visión</h3>
                        <p className="text-gray-700 mb-6">
                            Ser el referente en San Miguel del Monte para la rehabilitación integral, combinando atención de calidad, tecnología avanzada y un trato humano excepcional. Aspiramos a transformar la vida de nuestros pacientes, ayudándolos a alcanzar su máximo bienestar físico y emocional.                        </p>
                        <h3 className="text-2xl font-semibold text-verde mb-4">Nuestros Valores</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Compromiso con el Paciente: Priorizar siempre el bienestar y la recuperación de nuestros pacientes, brindando un trato humano y personalizado.</li>
                            <li>Profesionalismo: Mantener los más altos estándares de ética y competencia en todos nuestros servicios.</li>
                            <li>Innovación: Incorporar las mejores prácticas y tecnología avanzada para mejorar continuamente nuestros tratamientos.</li>
                            <li>Empatía: Escuchar y entender las necesidades de cada paciente, ofreciendo un ambiente de apoyo y respeto.</li>
                            <li>Excelencia en el Servicio: Esforzarnos por superar las expectativas, proporcionando una atención integral que abarca cuerpo y mente.</li>
                        </ul>
                    </div>

                    {/* Imagen */}
                    <div className="relative flex-1">
                        <div className="relative w-full h-full">
                            <Image
                                src="/local.webp"
                                alt="Sobre Nosotros"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
