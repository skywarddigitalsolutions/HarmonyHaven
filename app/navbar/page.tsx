"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { TbMassage } from "react-icons/tb";
import { GiBarefoot } from "react-icons/gi";
import { GiFootprint } from "react-icons/gi";
import { GiJoint } from "react-icons/gi";
import { MdAssistWalker } from "react-icons/md";

const services = [
  {
    name: "Masajes",
    description: "Bienestar corporal",
    href: "/servicios/masajes",
    icon: TbMassage,
  },
  {
    name: "Podología",
    description: "Cuidado y alivio para pies y uñas",
    href: "/servicios/podologia",
    icon: GiFootprint,
  },
  {
    name: "Reflexología",
    description: "Estimulación de puntos en los pies para equilibrar el cuerpo",
    href: "/servicios/reflexologia",
    icon: GiBarefoot,
  },
  {
    name: "Rehabilitación",
    description:
      "Recuperación de funciones físicas mediante ejercicios y terapias",
    href: "/servicios/rehabilitacion",
    icon: MdAssistWalker,
  },
  {
    name: "Traumatología",
    description: "Tratamiento de lesiones",
    href: "/servicios/traumatologia",
    icon: GiJoint,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-verde fixed top-0 inset-x-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Harmony Haven</span>
            <img alt="" src="./logo.svg" className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm leading-6 text-white">
            Inicio
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm leading-6 text-white">
              Servicios
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-verde shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-verdeclaro">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-naranja group-hover:text-verde"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block text-white hover:text-verde"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <div className="group">
                        <p className="mt-1 text-gray-300 group-hover:text-verdeoscuro">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/insumos" className="text-sm leading-6 text-white">
            Insumos ortopédicos
          </a>
          <a href="/nosotros" className="text-sm leading-6 text-white">
            Nosotros
          </a>
          <a href="/contacto" className="text-sm leading-6 text-white">
            Contacto
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-verde px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Harmony Haven</span>
              <img alt="" src="./logo.svg" className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-blue"
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50"
                >
                  Inicio
                </a>
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-white hover:bg-verdeclaro">
                    Servicios
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-2 ml-10">
                    {services.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>
                <a
                  href="/insumos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-verdeclaro"
                >
                  Insumos ortopédicos
                </a>
                <a
                  href="/nosotros"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-verdeclaro"
                >
                  Nosotros
                </a>
                <a
                  href="/contacto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-verdeclaro"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
