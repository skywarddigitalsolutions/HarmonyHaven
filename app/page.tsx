import Image from "next/image";
import Navbar from "./navbar/page";
import Hero from "./componentes/hero"
import Info from "./componentes/info";
import Contacto from "./componentes/contacto";
import Servicios from "./componentes/servicios";
import Testimonios from "./componentes/testimonios";
import Footer from "./footer/page";
export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <Servicios />
    <Info />
    <Testimonios />
    <Contacto />
    <Footer />
   </>
  );
}
