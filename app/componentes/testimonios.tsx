'use client'

import { useState } from 'react';

const testimonios = [
  {
    name: 'Paciente anónimo',
    role: 'Masaje',
    testimonial: 'Los masajes en el centro integral de rehabilitación son increíbles. Después de varias sesiones, siento un alivio significativo en mi espalda y una relajación profunda que no había experimentado antes.',
    imageSrc: './paciente.png',
  },
  {
    name: 'Paciente anónimo',
    role: 'Rehabilitación',
    testimonial: 'La rehabilitación que recibí en el centro me permitió recuperar la movilidad de mi rodilla mucho más rápido de lo que esperaba. El equipo es muy profesional y atento a mis necesidades.',
    imageSrc: './paciente.png',
  },
  {
    name: 'Paciente anónimo',
    role: 'Compra de insumos ortopédicos',
    testimonial: 'Compré una bota walker en el centro y la experiencia fue excelente. Me ayudaron a elegir la talla perfecta y me explicaron cómo usarla correctamente. ¡Un servicio de primera!',
    imageSrc: './paciente.png',
  },
  {
    name: 'Paciente anónimo',
    role: 'Traumatología',
    testimonial: 'El equipo de traumatología del centro es de primer nivel. Me brindaron un diagnóstico preciso y el tratamiento adecuado para mi lesión. Gracias a ellos, estoy en camino a una recuperación total.',
    imageSrc: './paciente.png',
  },
  {
    name: 'Paciente anónimo',
    role: 'General',
    testimonial: 'El centro integral de rehabilitación superó todas mis expectativas. Desde el momento en que ingresé, fui recibida con una atención cálida y profesional. Su enfoque integral, que combina rehabilitación física con apoyo emocional, ha hecho una gran diferencia en mi calidad de vida.',
    imageSrc: './paciente.png',
}

];

export default function Testimonios() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-verde mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div key={testimonio.name} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={testimonio.imageSrc} alt={testimonio.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-verde">{testimonio.name}</h3>
                  <p className="text-sm text-gray-600">{testimonio.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonio.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
