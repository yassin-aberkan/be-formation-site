import Layout from "../../components/layout";
export default function SoutienScolaire() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - Accueil">
        <div className="pt-20">
          <div className="w-full bg-center bg-cover lg:h-96 h-screen image">
            <div className="flex items-center justify-center w-full lg:h-96 h-full bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <h1 className="text-2xl  leading-8 font-extrabold tracking-tight text-white uppercase lg:text-3xl">
                  Soutien Scolaire
                </h1>
                <span className="w-full px-4 py-2 mt-4 text-sm font-medium text-white ">
                  Soutenir le jeune dans sa scolarité de manière ponctuelle et
                  régulière
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-48 sm:mx-20 mx-10">
            <div className="py-12 bg-white">
              <div className="max-w-7xl">
                <div className="">
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl text-left">
                    4 Principes
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500  text-left">
                    L’aspect « soutien scolaire » de Be Formation agira selon 4
                    principes :
                  </p>
                </div>

                <div className="mt-10 text-left md:grid md:grid-cols-2">
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                        Prévention
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                      S’emparer d’une situation de décrochage scolaire en amont.
                    </dd>
                  </dl>
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                      Persévérance
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                    Soutenir les jeunes pour que qualification et épanouissement s’associent.
                    </dd>
                  </dl>
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                      Consensus
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                    Consensus	Privilégier le consensus aux conflits quelle que soit la situation.
                    </dd>
                  </dl>
                  <dl className="mb-10">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">
                      Équité
                      </p>
                    </dt>
                    <dd className="text-base text-gray-500">
                    Importance du milieu dans la prise en charge de la situation de décrochage.
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mb-14 lg:flex lg:space-x-10">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-left text-gray-700 sm:text-4xl">
              Le Soutien Scolaire
            </h2>
            <div className="flex my-4">
              <span className="flex items-center">
                <span className="">Public cible</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-600 space-x-2">
                Jeunes à partir de 12 ans en décrochage scolaire.
              </span>
            </div>
            <p className="mt-4 text-gray-500 text-left">
              Certains parlent de décrochage pour parler d’élèves qui ne
              s’investissent plus dans leur travail scolaire. Mais la définition
              la plus communément admise du décrochage scolaire est celle qui
              désigne les enfants, les adolescents, les jeunes en âge
              d’obligation scolaire, qui ont abandonné l’école et qui ne suivent
              aucun autre type d’enseignement ou de formation. On estime qu’un
              élève est considéré en décrochage quand il dépasse les 20
              demi-jours d’absence non justifiés.
            </p>
            <p className="mt-4 text-gray-500 text-left">
              Un adolescent sur dix est en décrochage scolaire en Belgique dont
              14,4% à Bruxelles. Les exclus du système scolaire ont de plus
              grandes chances de devenir des exclus de la société. Lutter contre
              le phénomène devient donc urgent et nécessaire étant donné que ses
              conséquences sont négatives pour l’individu et la société : la
              délinquance, les difficultés d’insertion socio-professionnelle,
              les problèmes de santé, la faible estime de soi, la dépression et
              autre maux qu’il entraine provoquant des coûts sociaux et
              économiques importants
            </p>
            <p className="mt-4 text-gray-500 text-left">
              Pour accéder à un emploi valorisé et valorisant, le diplôme est
              aujourd’hui très important, correspondant à une réelle « norme de
              recrutement » et un gage de réussite. Les jeunes sans diplôme
              présentent ainsi un risque plus élevé d’être exclus, marginalisés
              et de ne pas avoir toutes les cartes en main pour intégrer
              efficacement le marché de l’emploi et la société en général.
            </p>
          </div>
          <div>
            
          </div>
        </div>
          </div>
        
      </Layout>
      <style jsx>{`
        .image {
          /* The image used */
          /*background-image: url("/images/formations/multi-cover.jpg");*/
          background: url(/images/school.jpg);
          /* Full height */
          width: 100%;

          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
