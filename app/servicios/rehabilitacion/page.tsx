import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import Link from "next/link";
import { FaBrain, FaHandsHelping, FaRunning, FaHeartbeat } from 'react-icons/fa';

export default function Rehabilitacion() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 relative py-12" id="body">

                {/* Breadcrumb */}
                <nav className="absolute top-0 left-0 right-0 mt-8 mx-5 z-10" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center text-sm font-medium text-verdeclaro hover:text-white"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-verdeclaro mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <a
                                    href="/servicios"
                                    className="ms-1 text-sm font-medium text-verdeclaro hover:text-white md:ms-2"
                                >
                                    Servicios
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-verdeclaro mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-gray-100 md:ms-2">
                                    Rehabilitación
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Imagen de fondo */}
                <div className="relative">
                    <img src="../../rehabilitacion.webp" className="object-cover w-full h-[25vh] filter brightness-50 rounded-2xl" alt="Rehabilitación" />

                    {/* Fondo con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white opacity-90"></div>

                    {/* Contenido de la sección */}
                    <div className="relative z-10 pt-12 pb-12 text-center max-w-5xl mx-auto px-4">
                        <h2 className="text-4xl lg:text-6xl text-verde font-bold mb-4">Rehabilitación</h2>
                        <h5 className="text-lg text-verdeclaro mb-5">Recuperación integral y efectiva</h5>
                        <p className="text-verdeoscuro text-lg mb-6 mx-4 lg:mx-0">
                            La rehabilitación consiste en un conjunto de actividades y estrategias bien diseñadas y planificadas que tienen el objetivo de recuperar el deterioro de ciertas funciones afectadas tras daños cerebrales y también a nivel físico. Se entrena el plano cognitivo (atención, memoria, orientación, plano emocional) y en el plano físico se trabajan los movimientos de los miembros superiores e inferiores tras haber sufrido alteraciones, lesiones o lo referido a los post quirúrgico, la motricidad fina de las manos y en la Reeducación Postural Global (RPG).
                        </p>
                        <Link href={"https://wa.me/+5491155111262?text=Hola,%20quiero%20reservar%20un%20turno%20para%20rehabilitación`"} target="_blank">

                            <button className="p-5 bg-verde text-white rounded-xl">
                                Reservar turno
                            </button>
                        </Link>
                    </div>
                </div>

                {/* BENEFICIOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-6 mt-12 px-2 lg:px-10">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaBrain className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Rehabilitación Cognitiva</h4>
                        <p className="text-sm text-gray-700 mt-2">Enfoque en la mejora de funciones como la atención, memoria y orientación.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaHandsHelping className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Motricidad Fina</h4>
                        <p className="text-sm text-gray-700 mt-2">Entrenamiento para recuperar la precisión y coordinación de las manos.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaRunning className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Recuperación Física</h4>
                        <p className="text-sm text-gray-700 mt-2">Trabajo en los movimientos de los miembros superiores e inferiores.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaHeartbeat className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Reeducación Postural Global (RPG)</h4>
                        <p className="text-sm text-gray-700 mt-2">Técnica para mejorar la postura y prevenir problemas futuros.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
