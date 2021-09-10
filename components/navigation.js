import { Fragment } from "react";
import Link from "next/link";

import BeFormationText from "./be-formation-text.js";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, FacebookIcon } from "@heroicons/react/solid";
import {
  FaGraduationCap,
  FaGamepad,
  FaFilm,
  FaUserTie,
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const formations = [
  {
    name: "Audiovisuel et Multimédia",
    description:
      "Initier et former aux new medias, c’est-à-dire l’audiovisuel, la postproduction, la création de contenu, le copywriting, la photo, les logiciels de retouche,…",
    href: "/formations/multimedia",
    icon: FaFilm,
  },
  {
    name: "Soutien Scolaire",
    description:
      "Soutenir le jeune dans sa scolarité de manière ponctuelle ou régulière via l’utilisation de TIC comme prétexte ludique.",
    href: "/formations/soutien-scolaire",
    icon: FaGraduationCap,
  },
  {
    name: "Lutter contre la fracture numérique",
    description:
      "Viser l’e-inclusion via des cours d’initiation et de remise à niveau de TIC pour construire une société numérique performante et humaine.",
    href: "/formations/facture-numerique",
    icon: FaUserTie,
  },
  {
    name: "e-Sport",
    description:
      "Faire du jeu vidéo un outil pédagogique et éducatif porteur de valeurs sportives.",
    href: "/formations/e-sport",
    icon: FaGamepad,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <Popover className="w-full bg-white z-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center space-x-5">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/icon-be-formation.svg"
                alt=""
                height="40"
                width="50"
              />
            </a>
            <BeFormationText></BeFormationText>
          </div>
          <div className="-mr-2 -my-2 md:hidden 2xl:visible">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Accueil
              </a>
            </Link>
            <Link href="/a-propos">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                À propos
              </a>
            </Link>
            
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none "
                    )}
                  >
                    <span>Nos formations</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {formations.map((item) => (
                            <div key={item.name}>
                              <Link href={item.href}>
                                <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-700"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-left text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="text-left mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center space-x-5 justify-end md:flex-1 lg:w-0">
            <a
              href="https://www.facebook.com/Be-Formation-105938411811763"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank" rel="noopener noreferrer"
            >
              <FaFacebookSquare
                className="flex-shrink-0 h-7 w-7 text-gray-500 hover:text-blue-600"
                aria-hidden="true"
              ></FaFacebookSquare>
            </a>
            <a
              href="https://www.instagram.com/beformation/"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram
                className="flex-shrink-0 h-7 w-7 text-gray-500 hover:text-purple-600"
                aria-hidden="true"
              ></FaInstagram>
            </a>
            <a
              href="mailto:asblbeformation@gmail.com"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <FaEnvelope
                className="flex-shrink-0 h-6 w-7 text-gray-500 hover:text-blue-400"
                aria-hidden="true"
              ></FaEnvelope>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/icon-be-formation.svg"
                    alt=""
                    height="50"
                    width="60"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {formations.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-gray-700"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Accueil
                  </a>
                </Link>
                <Link href="/a-propos">
                <a
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  À propos
                </a>
                </Link>
                <Link href="/contact">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
