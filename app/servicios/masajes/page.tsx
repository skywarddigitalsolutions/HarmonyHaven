import Navbar from "../../navbar/page"
import Footer from "../../footer/page"
export default function Masajes() {
    return(
        <>
        <Navbar />
        <div className="mt-12" id="contenedor">

          <nav className="flex mt-20 ml-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-verdeclaro dark:text-gray-400 dark:hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="/servicios" className="ms-1 text-sm font-medium text-gray-700 hover:text-verdeclaro md:ms-2 dark:text-gray-400 dark:hover:text-white">Servicios</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Masajes </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="min-h-screen mt-5" id="masajes">
            <div className="flex justify-around " id="hero">
              <div className="flex flex-col justify-between">
                <div className="">
                  <h2 className="text-6xl text-verdeoscuro mb-7">
                    Masajes
                  </h2>
                  <h5 className="text-lg text-verdeclaro">
                    Bienestar corporal
                  </h5>
                </div>
                <div>
                  <button className="p-5 bg-verde text-white rounded-xl">
                    Quiero un masaje
                  </button>
                </div>
              </div>
              <img src="../../fotoinfo.jpg" className="max-w-[40%] rounded-xl "></img>
            </div>
          </div>
            
        </div>
        <Footer />
        </>
    );
}