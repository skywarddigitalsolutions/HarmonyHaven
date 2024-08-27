import { Contact } from "@/app/componentes/contacto-btn";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { FaBone, FaUserMd, FaProcedures, FaHeartbeat } from 'react-icons/fa';

export default function Traumatologia() {
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
                                    className="ms-1 text-sm font-medium text-verdeclaro hover:text-white md:ms-2 "
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
                                    Traumatología
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Imagen de fondo */}
                <div className="relative">
                    <img src="../../traumatologia.webp" className="object-cover w-full h-[25vh] filter brightness-50 rounded-2xl" alt="Traumatología" />

                    {/* Fondo con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white opacity-90"></div>

                    {/* Contenido de la sección */}
                    <div className="relative z-10 pt-12 pb-12 text-center max-w-5xl mx-auto px-4">
                        <h2 className="text-4xl lg:text-6xl text-verde font-bold mb-4">Traumatología</h2>
                        <h5 className="text-lg text-verdeclaro mb-5">Cuidado integral de huesos, articulaciones y músculos</h5>
                        <p className="text-verdeoscuro text-lg mb-6 mx-4 lg:mx-0">
                            Nuestro servicio de traumatología se enfoca en la evaluación, diagnóstico y tratamiento de lesiones y trastornos relacionados con el sistema musculoesquelético. Abordamos una amplia gama de problemas, desde fracturas y esguinces hasta enfermedades crónicas como la artritis. Utilizamos técnicas avanzadas y personalizadas para asegurar la mejor recuperación y bienestar del paciente.
                        </p>
                        <button className="p-5 bg-verde text-white rounded-xl">
                            Reservar turno
                        </button>
                    </div>
                </div>

                {/* BENEFICIOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-6 mt-12 px-2 lg:px-10">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaBone className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Fracturas y Lesiones</h4>
                        <p className="text-sm text-gray-700 mt-2">Tratamiento especializado para fracturas, esguinces y dislocaciones.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaUserMd className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Artritis y Enfermedades Crónicas</h4>
                        <p className="text-sm text-gray-700 mt-2">Manejo de enfermedades crónicas como la artritis y la osteoporosis.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaProcedures className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Rehabilitación Post-Quirúrgica</h4>
                        <p className="text-sm text-gray-700 mt-2">Programas personalizados para la recuperación después de una cirugía.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaHeartbeat className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Bienestar Musculoesquelético</h4>
                        <p className="text-sm text-gray-700 mt-2">Prevención y tratamiento de trastornos musculoesqueléticos.</p>
                    </div>
                </div>

            </div>
            <Footer />
            <Contact />
        </>
    );
}
    