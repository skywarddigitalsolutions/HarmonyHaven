import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { FaRegSmile, FaRegHeart, FaBed, FaShieldAlt, FaSpa, FaHeartbeat, FaShieldVirus, FaBalanceScale, FaBriefcaseMedical, FaStethoscope, FaUserNurse, FaHandHoldingMedical } from 'react-icons/fa';
import { GiFootPlaster, GiFootprint } from "react-icons/gi";

export default function Podologia() {
    return(
        <>
            <Navbar/>
            <div className="relative my-12 bg-gray-100" id="body">

                {/* Breadcrumb */}
                <nav className="absolute top-0 left-0 right-0 mt-8 mx-5 z-10" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center text-sm font-medium text-verdeclaro hover:text-white "
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
                                    Podología
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Imagen de fondo */}
                <div className="relative">
                    <img src="../../fotoinfo.jpg" className="object-cover w-full h-[25vh] opacity-80 rounded-2xl" alt="Masajes" />

                    {/* Fondo con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white opacity-90"></div>

                    {/* Contenido de la sección */}
                    <div className="relative z-10 pt-12 pb-12 text-center max-w-5xl mx-auto px-4">
                        <h2 className="text-4xl lg:text-6xl text-verde font-bold mb-4">Podología</h2>
                        <h5 className="text-lg text-verdeclaro mb-5">Cuidado y alivio para pies y uñas</h5>
                        <p className="text-verdeoscuro text-lg mb-6 mx-4 lg:mx-0">
                            La podología se enfoca en la prevención, diagnóstico y tratamiento de los trastornos y afecciones de los pies y uñas. Ofrecemos soluciones especializadas para problemas como uñas encarnadas, hongos y pie diabético.
                        </p>
                        <button className="p-5 bg-verde text-white rounded-xl">
                            Reservar turno
                        </button>
                    </div>
                </div>

                {/* BENEFICIOS */}          
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-6 mt-12 px-2 lg:px-10">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <GiFootprint className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Onicocriptosis: Uña encarnada</h4>
                        <p className="text-sm text-gray-700 mt-2">Tratamiento especializado para eliminar y prevenir las uñas encarnadas.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaBriefcaseMedical className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Onicomicosis: Uñas con hongo</h4>
                        <p className="text-sm text-gray-700 mt-2">Tratamiento eficaz para combatir los hongos en las uñas.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaStethoscope className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Pie de diabético</h4>
                        <p className="text-sm text-gray-700 mt-2">Cuidados especiales para personas con diabetes, previniendo complicaciones.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaUserNurse className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Podoestética</h4>
                        <p className="text-sm text-gray-700 mt-2">Cuidado estético de los pies, manteniéndolos saludables y hermosos.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaHandHoldingMedical className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Durezas: Callos - hiperqueratosis</h4>
                        <p className="text-sm text-gray-700 mt-2">Eliminación de durezas, callos y tratamiento de hiperqueratosis.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaShieldAlt className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Heloma dorsal</h4>
                        <p className="text-sm text-gray-700 mt-2">Tratamiento especializado para eliminar helomas dorsales y evitar su reaparición.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
