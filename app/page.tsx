"use client"
import Image from "next/image";
import Navbar from "./navbar/page";
import Hero from "./componentes/hero"
import Info from "./componentes/info";
import Contacto from "./componentes/contacto";
import Servicios from "./componentes/servicios";
import Testimonios from "./componentes/testimonios";
import Footer from "./footer/page";
import { Contact } from "./componentes/contacto-btn";
import Loader from "./componentes/loader";
import { useEffect,useState } from "react";
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);
  return (
   <>
     {" "}
      {!loaded && <Loader />}
      {loaded && (
        <div>
    <Navbar />
    <Hero />
    <Servicios />
    <Info />
    <Testimonios />
    <Contacto />
    <Footer />
    <Contact/>
    </div>
      )}
   </>
  );
}
