import Navbar from "../../navbar/page"
import Footer from "../../footer/page"
import { FaRegSmile, FaRegHeart, FaBed, FaShieldAlt } from 'react-icons/fa';

export default function Masajes() {
    return (
        <>
            <Navbar />
                      
                <div className="relative bg-gray-100 mt-12" id="body">

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
                                    Masajes
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
                        <h2 className="text-4xl lg:text-6xl text-verde font-bold mb-4">Masajes</h2>
                        <h5 className="text-lg text-verdeclaro mb-5">Bienestar corporal</h5>
                        <p className="text-verdeoscuro text-lg mb-6 mx-4 lg:mx-0">
                            El masaje es un método de valoración y tratamiento manual de aquellas partes del cuerpo que presentan alguna dolencia, con el objetivo de mejorar el dolor, reducir o eliminar tensiones musculares, mejorar la circulación sanguínea y linfática y conseguir un alivio del estrés, la ansiedad y las tensiones diarias.
                        </p>
                        <button className="p-5 bg-verde text-white rounded-xl">
                            Reservar turno
                        </button>
                    </div>
                </div>

                {/* beneficios */}
                <div className=" bg-gray-100 grid grid-cols-2 lg:grid-cols-4 py-5 gap-6 mt-12 px-2 lg:px-10">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaRegSmile className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Alivia las Tensiones</h4>
                        <p className="text-sm text-gray-700 mt-2">Ayuda a reducir tensiones musculares y alivia el dolor.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaRegHeart className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Reduce el Estrés y Ansiedad</h4>
                        <p className="text-sm text-gray-700 mt-2">Promueve la relajación y reduce los niveles de estrés.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaBed className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Favorece el Sueño</h4>
                        <p className="text-sm text-gray-700 mt-2">Mejora la calidad del sueño al relajar cuerpo y mente.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                        <FaShieldAlt className="text-verdeoscuro text-4xl mb-4" />
                        <h4 className="text-lg font-semibold text-verdeoscuro">Fortalece el Sistema Inmune</h4>
                        <p className="text-sm text-gray-700 mt-2">Ayuda a fortalecer el sistema inmune y la salud en general.</p>
                    </div>
                </div>

                    {/* CAÑAS */}
                    <div id="cañas" className="flex flex-col justify-center items-center mt-24  mx-5 lg:mx-24">
                        <div className="flex flex-col lg:flex-row gap-12 justify-around items-center w-full" id="contenedorreservar">
                            <div className="flex flex-col justify-around gap-12" id="texto">
                                <div>
                                    <h4 className="text-5xl font-bold text-verde mb-5">Masaje con cañas de bambú</h4>
                                    <h5 className="text-lg text-verdeoscuro max-w-auto">
                                        La bambuterapia es un tipo de tratamiento estético en el que se usa como herramienta cañas de bambú de diversos tamaños. Se aplica presión en distintas partes del cuerpo y se obtienen diferentes beneficios terapéuticos y estéticos.
                                    </h5>
                                </div>
                                <div>
                                    <button className="p-5 bg-verde text-lg text-white rounded-xl">Reservar turno</button>
                                </div>
                            </div>
                            <div id="imagen" className="mx-2">
                                <img src="../../fotoinfo.jpg" className=" max-w-screen lg:max-w-[500px] rounded-xl" alt="Masaje con cañas de bambú"></img>
                            </div>
                        </div>

                        {/* Duración CAÑAS */}
                        <div className="w-full flex flex-col justify-center items-center mt-12">
                            <h5 className="text-verdeoscuro text-center font-bold mb-2">Duración</h5>
                            <div className="w-[100%] lg:w-[50%] bg-verdeclaro rounded-full h-2.5 mb-12" id="duracion">
                                <div className="bg-verdeoscuro h-2.5 rounded-full w-[75%]"></div>
                                <h5 className="ml-[70%] mt-2">1:30 hs</h5>
                            </div>
                        </div>

                        {/* Beneficios CAÑAS */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-8">
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md font-semibold text-verdeoscuro">Mejora la circulación sanguínea</h4>
                                <p className="text-sm text-gray-700 mt-2">Optimiza el flujo de sangre y el sistema linfático.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Relaja el sistema nervioso</h4>
                                <p className="text-sm text-gray-700 mt-2">Calma y estabiliza el sistema nervioso.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Reduce el dolor muscular</h4>
                                <p className="text-sm text-gray-700 mt-2">Disminuye el dolor y mejora la flexibilidad.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Fortalece el tejido conectivo</h4>
                                <p className="text-sm text-gray-700 mt-2">Aumenta la resistencia y elasticidad del tejido.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Estimula el sistema linfático</h4>
                                <p className="text-sm text-gray-700 mt-2">Ayuda a eliminar toxinas y líquidos retenidos.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Aumenta la energía</h4>
                                <p className="text-sm text-gray-700 mt-2">Revitaliza y aumenta el nivel de energía general.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Reduce la celulitis</h4>
                                <p className="text-sm text-gray-700 mt-2">Mejora la apariencia de la piel y reduce la celulitis.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Alivia el estrés</h4>
                                <p className="text-sm text-gray-700 mt-2">Disminuye los niveles de estrés y promueve la calma.</p>
                            </div>
                            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Mejora la postura</h4>
                                <p className="text-sm text-gray-700 mt-2">Ayuda a corregir y mejorar la postura corporal.</p>
                            </div>
                        </div>
                    </div>

                    {/*REDUCTOR*/}
                  <div id="reductor" className="flex flex-col justify-center items-center mt-24 mx-5 lg:mx-24">
        <div className="flex flex-col lg:flex-row-reverse gap-12 justify-around items-center w-full" id="contenedorreservar">
            <div className="flex flex-col justify-around gap-12" id="texto">
                <div>
                    <h4 className="text-5xl font-bold text-end text-verde mb-5">Masaje reductor</h4>
                    <p className="text-lg text-end text-verdeoscuro max-w-auto">
                        Es una modalidad de masaje que se realiza con una presión fuerte y una velocidad más rápida a la usual. El masaje reductivo busca ayudar a eliminar el acumulo de grasa localizada y a la vez, estilizar el contorno de la figura logrando una silueta más estética. Este tratamiento es ideal para deshacerse de la grasa localizada no deseada. 
                    </p>
                </div>
                <div className="text-end">
                    <button className="p-5 bg-verde text-lg  text-white rounded-xl">Reservar turno</button>
                </div>
            </div>
            <div id="imagen" className="mx-2">
                <img src="../../fotoinfo.jpg" className="max-w-screen lg:max-w-[500px] rounded-xl" alt="Masaje reductor"></img>
            </div>
        </div>

        {/* Duración REDUCTOR */}
        <div className="w-full flex flex-col justify-center items-center mt-12">
            <h5 className="text-verdeoscuro text-center font-bold mb-2">Duración</h5>
            <div className=" w-[100%] lg:w-[50%] bg-verdeclaro rounded-full h-2.5 mb-12" id="duracion">
                <div className="bg-verdeoscuro h-2.5 rounded-full w-[75%]"></div>
                <h5 className="ml-[70%] mt-2">1:30 hs</h5>
            </div>
        </div>

        {/* Beneficios REDUCTOR */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-8">
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Elimina grasa localizada</h4>
                <p className="text-sm text-gray-700 mt-2">Ayuda a eliminar el exceso de grasa en áreas específicas.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Mejora la circulación</h4>
                <p className="text-sm text-gray-700 mt-2">Estimula la circulación y el metabolismo local.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Estiliza la figura</h4>
                <p className="text-sm text-gray-700 mt-2">Ayuda a esculpir y mejorar la silueta corporal.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Mejora la elasticidad</h4>
                <p className="text-sm text-gray-700 mt-2">Fortalece y tonifica la piel.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Reduce el tejido adiposo</h4>
                <p className="text-sm text-gray-700 mt-2">Ayuda a disolver la grasa acumulada.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Favorece la quema de calorías</h4>
                <p className="text-sm text-gray-700 mt-2">Aumenta el consumo de calorías debido a la actividad motora.</p>
            </div>
        </div>
                  </div>
                    {/* DRENAJE*/}
                  <div id="drenaje" className="flex flex-col justify-center items-center mt-24 mx-5 lg:mx-24">
                    <div className="flex flex-col lg:flex-row gap-12 justify-around items-center w-full" id="contenedorreservar">
                              <div className="flex flex-col justify-around gap-12" id="texto">
                                  <div>
                                      <h4 className="text-5xl font-bold text-verde mb-5">Drenaje linfático </h4>
                                      <h5 className="text-lg text-verdeoscuro max-w-auto"> Es una técnica de masaje suave y lenta que tiene como objetivo facilitar el paso de la linfa a través del sistema circulatorio y estimular su eliminación.                                  </h5>
                                  </div>
                                  <div>
                                      <button className="p-5 bg-verde text-lg text-white rounded-xl">Reservar turno</button>
                                  </div>
                              </div>
                              <div id="imagen" className="mx-2">
                                  <img src="../../fotoinfo.jpg" className=" max-w-screen lg:max-w-[500px] rounded-xl" alt="Masaje con cañas de bambú"></img>
                              </div>
                      </div>

        {/* Duración DRENAJE */}
        <div className="w-full flex flex-col justify-center items-center mt-12">
            <h5 className="text-verdeoscuro text-center font-bold mb-2">Duración</h5>
            <div className="w-[100%] lg:w-[50%] bg-verdeclaro rounded-full h-2.5 mb-12" id="duracion">
                <div className="bg-verdeoscuro h-2.5 rounded-full w-[75%]"></div>
                <h5 className="ml-[70%] mt-2">1:30 hs</h5>
            </div>
        </div>

        {/* Beneficios DRENAJE */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4 lg:px-0">
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Elimina la retención de líquido</h4>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Reduce la celulitis</h4>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Recuperación de lesiones musculares</h4>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Recupera tejidos</h4>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Reduce hematomas</h4>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Elimina toxinas</h4>
            </div>
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="text-md lg:text-lg font-semibold text-verdeoscuro">Ayuda a una cicatrización más rápida de los tejidos</h4>
            </div>
        </div>
                  </div>

                
            </div>
            <Footer />
        </>
    );
}
