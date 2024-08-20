'use client'

import { useState } from 'react';

const testimonios = [
  {
    name: 'Juan Pérez',
    role: 'Paciente',
    testimonial: 'El centro de rehabilitación cambió mi vida. El equipo es increíble y la atención personalizada me ayudó a recuperar mi movilidad más rápido de lo que esperaba.',
    imageSrc: './foto1.jpg',
  },
  {
    name: 'Ana García',
    role: 'Paciente',
    testimonial: 'Excelente atención y profesionalismo. Gracias a su dedicación, he mejorado significativamente mi condición y vuelvo a disfrutar de mis actividades diarias.',
    imageSrc: './foto2.jpg',
  },
  {
    name: 'Luis Rodríguez',
    role: 'Paciente',
    testimonial: 'Los programas de rehabilitación son de primer nivel. El enfoque integral y el apoyo constante hicieron una gran diferencia en mi recuperación.',
    imageSrc: './foto3.jpg',
  },
  {
    name: 'María López',
    role: 'Paciente',
    testimonial: 'Un equipo muy profesional y dedicado. La atención es personalizada y se nota el compromiso con el bienestar de los pacientes.',
    imageSrc: './foto4.jpg',
  },
  {
    name: 'Carlos Martínez',
    role: 'Paciente',
    testimonial: 'Me impresionó la calidad del servicio y el cuidado recibido. Gracias a ellos, he recuperado gran parte de mi movilidad y estoy muy agradecido.',
    imageSrc: './foto5.jpg',
  },
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
