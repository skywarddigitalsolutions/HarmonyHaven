import { GrGroup } from "react-icons/gr";
import { AiOutlineAim } from "react-icons/ai";
import { BsPersonArmsUp } from "react-icons/bs";

const features = [
  {
    name: 'Objetivo:',
    description:
      'Ayudar a los pacientes a ser independientes: hacer por sí mismos tanto como puedan. ',
    icon: AiOutlineAim,
  },
  {
    name: 'Paciente:',
    description: 'La rehabilitación se hace con un paciente, no a un paciente. ',
    icon: BsPersonArmsUp,
  },
  {
    name: 'Equipo:',
    description: ' Las condiciones de salud crónicas (de largo plazo y corto plazo) se realizan trabajando en equipo.',
    icon: GrGroup,
  },
]

export default function Info() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-verde">Harmony Haven</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Quienes somos? </p>
              <p className="mt-6 text-md leading-8 text-gray-600">
              Nuestro centro comprende el estudio, detección y diagnóstico, prevención y tratamiento clínico de aquellas personas con dificultad en su movilidad y en proceso de recuperación con secuelas de enfermedades neurológicas. Se tratan a los pacientes con dolor agudo o crónico, enfermedades musculoesqueléticas, como cervicalgia, lumbalgia, escoliosis, tendinitis, fibromialgia o neuralgias, a personas que han sufrido episodios de accidente cerebro vascular, a pacientes con alteraciones ortopédicas, así como enfermedades respiratorias y cardíacas. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-verde" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="./fotoinfo.jpg"
            width={2432}
            height={1442}
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:w-[48rem] lg:max-w-none lg:rounded-xl lg:shadow-xl lg:ring-1 lg:ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  )
}
