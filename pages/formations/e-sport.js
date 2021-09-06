import Layout from "../../components/layout";
export default function ESport() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - e-sport">
        <div className="pt-20">
          <div className="w-full bg-center bg-cover lg:h-96 h-screen image">
            <div className="flex items-center justify-center w-full lg:h-96 h-full bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <h1 className="text-4xl mb-5 leading-8 font-extrabold tracking-tight text-white ">
                  E-Sport
                </h1>
                <span className="w-full px-4 py-2 text-sm font-medium text-white">
                Faire du jeu vidéo un outil pédagogique et éducatif porteur de valeurs sportives
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-48 sm:mx-20 mx-10">
          <div className="py-12 bg-white">
            <div className="max-w-5xl">
            <div className="flex my-4">
                <span className="flex items-center text-sm sm:text-base">
                  <span className="">Public cible</span>
                </span>
                <span className="flex text-sm sm:text-base ml-3 pl-3 py-2 border-l-2 border-gray-600 space-x-2">
                  Jeunes, Gamers
                </span>
              </div>
            <p className="mt-4 text-gray-500 text-left">
              Be Formation garantit ainsi des espaces et des moments consacrés au e-sport, avec l’ambition de réunir des joueurs de tous horizons, sous une même bannière, afin de créer de la cohésion de groupe, autour d’un but commun. Mais aussi d’agir en tant qu’incubateur d’entreprises spécialement orienté e-sport. Comme dans les autres incubateurs d’entreprises plus « classiques », ceux qui souhaitent lancer une activité directement liée à l’e-sport recevraient un appui en termes d’hébergement, de conseil et de financement, lors des premières étapes de la vie de leur entreprise.
              </p>
              
              <h2 className="text-2xl font-extrabold tracking-tight text-left text-gray-700 sm:text-4xl">
                Qu&lsquo;est-ce que l&lsquo;E-Sport ?
              </h2>
              
              <p className="mt-4 text-gray-500 text-left">
              L&lsquo;e-sport ou sport électronique désigne la pratique d&lsquo;un jeu vidéo en réseau sur Internet, seul ou en équipe. Considéré comme un sport moderne à part entière par ses pratiquants et ses promoteurs, l&lsquo;e-sport est né à la fin des 1980 en tant que loisir. Cette discipline est née grâce à l&lsquo;émergence de jeux multi-joueurs en réseau. La diffusion en streaming des parties, avec les publicités et sponsors associés, ont donné en quelques années à l&lsquo;e-sport une dimension qui va bien au-delà du loisir et du jeu vidéo. 
              </p>


              <h2 className="text-2xl font-extrabold tracking-tight text-left text-gray-700 sm:text-4xl mt-5">
                L&lsquo;E-Sport Aujourd&lsquo;hui 
              </h2>

              <p className="mt-4 text-gray-500 text-left">
              La croissance de l&lsquo;e-sport au cours de ces dernières années est indéniable. On assiste à un véritable engouement pour les compétitions de jeux vidéo qui ont su séduire joueurs comme spectateurs. Si l&lsquo;e-sport a pu gagner en popularité, c&lsquo;est avant tout grâce aux LAN, désormais très médiatisées. Ces évènements mettant en scène des compétitions sur les jeux les plus propices, sont de mieux en mieux organisés, de plus en plus diffusés et représentent un intérêt de plus en plus fort du fait du niveau des joueurs qui y participent.</p>

 
            </div>
            <div></div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .image {
          /* The image used */
          /*background-image: url("/images/formations/facture-cover.jpg");*/
          background: url(/images/e-sport.jpg);
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
