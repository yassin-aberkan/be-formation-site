import Layout from "../../components/layout";
export default function FactureNumerique() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - Accueil">
        <div className="pt-20">
          <div className="w-full bg-center bg-cover lg:h-96 h-screen image">
            <div className="flex items-center justify-center w-full lg:h-96 h-full bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <h1 className="text-2xl  leading-8 font-extrabold tracking-tight text-white uppercase lg:text-3xl">
                  Lutter contre la Facture numérique
                </h1>
                <span className="w-full px-4 py-2 mt-4 text-sm font-medium text-white ">
                  Viser l’e-inclusion via des cours d’initiation et de remise à
                  niveau de TIC pour construire une société numérique
                  performante et humaine
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-48 sm:mx-20 mx-10">
          <div className="py-12 bg-white">
            <div className="max-w-5xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-left text-gray-700 sm:text-4xl">
                Construire une société numérique performante et humaine
              </h2>
              <div className="flex my-4">
                <span className="flex items-center text-sm sm:text-base">
                  <span className="">Public cible</span>
                </span>
                <span className="flex text-sm sm:text-base ml-3 pl-3 py-2 border-l-2 border-gray-600 space-x-2">
                  personnes inscrites comme demandeuses d’emploi ou bénéficiant
                  d’un RIS, primo-arrivants
                </span>
              </div>
              <p className="mt-4 text-gray-500 text-left">
                Dans un monde où l’interface numérique devient de plus en plus
                omniprésente et ce même pour les opérations les plus simples de
                la vie courante, l’absence de maîtrise de ce moyen de
                communication peut entraîner un risque d’exclusion pour les
                populations concernées.
              </p>
              <p className="mt-4 text-gray-500 text-left">
                Plus concrètement, pour les personnes ayant des difficultés à
                l’écrit, il est encore plus difficile de réaliser un virement
                via l’internet, d’acheter un ticket de tram aux bornes prévues à
                cet effet, d’envoyer un mail à l’administration communale, de
                rechercher de l’emploi sur My Actiris ou encore d’inscrire son
                enfant à l’école…
              </p>
              <p className="mt-4 text-gray-500 text-left">
                Si la numérisation croissante de la société offre de nombreuses
                opportunités, elle présente aussi un risque important de mise à
                l’écart des personnes éloignées du numérique : une réalité
                incontournable et actuelle, comme l’a révélé la crise du
                COVID-19.
              </p>


              <h2 className="text-2xl font-extrabold tracking-tight text-left text-gray-700 sm:text-4xl mt-10">
                Formations proposées 
              </h2>

              <p className="mt-4 text-gray-500 text-left">
              C’est donc à travers cet axe, qui concerne la fracture numérique que Be Formation offrira un espace dédié à l’apprentissage et au développement dans le but de sensibiliser les personnes dans le besoin aux technologies de l’information et de la communication. 
              </p>

              <div className="mt-10 text-left md:grid md:grid-cols-2">
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                        Word
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                      Maîtriser toutes les fonctionnalités du logiciel Word, acquérir les bases essentielles du logiciel Word, de savoir rédiger et écrire un courrier Word simple
                    </dd>
                  </dl>
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                      Internet
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                    Il s’agit d’une formation de base pour pouvoir utiliser internet pour ces besoins personnels, rédiger un mail, s&lsquo;informer, etc.
                    </dd>
                  </dl>
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                      Homebanking et services institutionnels en ligne
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                    Savoir payer une facture en ligne, etc.
                    </dd>
                  </dl>
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                      Réseaux sociaux
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                      Permet d&lsquo;utiliser les fonctions de base des resaux sociaux pour contacter des amis, se divertir etc.
                    </dd>
                  </dl>
                </div>
            </div>
            <div></div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .image {
          /* The image used */
          /*background-image: url("/images/formations/facture-cover.jpg");*/
          background: url(/images/formations/facture-cover.jpg);
          /* Full height */
          width: 100%;

          /* Center and scale the image nicely */
          background-position: 50% 30%;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
