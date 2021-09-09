import Link from "next/link";
/* This example requires Tailwind CSS v2.0+ */
const formations = [
  {
    name: "Audiovisuel et Multimédia",
    description:
      "Initier et former aux new medias, c’est-à-dire l’audiovisuel, la postproduction, la création de contenu, le copywriting, la photo, les logiciels de retouche,…",
    href: "/formations/multimedia",
    url: "/images/filming-low.jpg",
  },
  {
    name: "Soutien Scolaire",
    description:
      "Soutenir le jeune dans sa scolarité de manière ponctuelle ou régulière via l’utilisation de TIC comme prétexte ludique.",
    href: "/formations/soutien-scolaire",
    url: "/images/school-low.jpg",
  },
  {
    name: "Lutter contre la fracture numérique",
    description:
      "Viser l’e-inclusion via des cours d’initiation et de remise à niveau de TIC pour construire une société numérique performante et humaine.",
    href: "/formations/facture-numerique",
    url: "/images/business-low.jpg",
  },
  {
    name: "e-Sport",
    description:
      "Faire du jeu vidéo un outil pédagogique et éducatif porteur de valeurs sportives.",
    href: "/formations/e-sport",
    url: "/images/e-sport-low.jpg",
  },
];


export default function Discover() {
  return (
    <div
      className="bg-white"
    >
      <div className="mx-5 lg:mx-auto max-w-2xl py-24 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-left text-gray-700 sm:text-4xl">
            Be Formation – 4 Axes
          </h2>
          <p className="mt-4 text-gray-500 text-left">
            Le fil conducteur de ces 4 axes est l’apprentissage par les pairs.
            En effet, nous misons sur l’apprentissage spontané qui se fait chez
            les jeunes qui ont acquis une expertise dans le domaine du
            multimédia alors que d’autres non.<br></br>
            Les premiers transmettent ce qu’ils ont appris à leurs pairs dans un
            environnement informel. C’est ici que l’effet multiplicateur se
            manifeste dans tout son potentiel.
          </p>
          <p className="mt-4 text-gray-500 text-left">
            Be Formation se décline en 4 axes qui peuvent contribuer à cet
            objectif.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {formations.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <Link href={feature.href}><dt className="font-medium text-gray-900 hover:text-gray-500 cursor-pointer">{feature.name}</dt></Link>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {formations.map((feature) => (
            <div key={feature.name} className="">
            
              <div className="relative">
                <div className="absolute inset-0 z-10 rounded-lg bg-black space-y-6 text-center flex flex-col items-center justify-center opacity-0  hover:opacity-80 bg-opacity-90 duration-300">
                  <span className="text-lg font-bold text-white tracking-wider leading-relaxed font-sans">{feature.name}</span>
                  <Link href={feature.href}>
                  <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
                    Découvrir
                  </button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="flex flex-wrap content-center">
                    <img
                      src={feature.url}
                      alt={feature.name + " image"}
                      className="mx-auto rounded-lg bg-gray-100 object-cover cart-Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .cart-Image {
          background-image: url("../../../../../")
          object-fit: cover;
          width: 400px;
          height: 300px;
        }
      `}</style>
    </div>
  );
}
