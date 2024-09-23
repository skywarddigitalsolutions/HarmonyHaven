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
import Head from 'next/head';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Centro Integral de Rehabilitación en San Miguel del Monte</title>
        <meta name="description" content="Especialistas en rehabilitación, fisioterapia y ortopedia. Ofrecemos masajes terapéuticos, drenaje linfático y productos ortopédicos de calidad." />
        <meta name="keywords" content="rehabilitación, fisioterapia, ortopedia, masajes, drenaje linfático, san miguel del monte, ortopédicos, monte" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Centro Integral de Rehabilitación en San Miguel del Monte" />
        <meta property="og:description" content="Especialistas en rehabilitación y ortopedia. Contacta para tratamientos y productos especializados." />
        <meta property="og:image" content="/images/centro-rehabilitacion.jpg" />
        <meta property="og:url" content="https://harmonyhaven.com.ar" />
        <link rel="canonical" href="https://harmonyhaven.com.ar" />
      </Head>

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
          <Contact />
        </div>
      )}
    </>
  );
}
