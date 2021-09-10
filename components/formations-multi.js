import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;
import FormationCard from "./formation-card";
let typeKey = 1;
function callback(key) {
  typeKey = key;
}
const formations = [
  {
    name: "Be film",
    longName: "Savoir Filmer",
    hours: 18,
    required: "Aucun",
    description:
      "Cette formation s’adresse à toute personne voulant réaliser un contenu vidéo, que ce soit une capsule, un court métrage ou reportage. Vous pourrez comprendre la méthodologie d’une bonne réalisation pour pouvoir filmer un évènement, vidéo podcast, un voyage. Une partie théorique et ensuite pratique sera donné.",
    price: 25,
    image: "/images/formations/film-cover.jpeg",
    type: 1,
  },
  {
    name: "Be drone",
    longName: "Savoir piloter un drone avec caméra",
    hours: 6,
    required: "Aucun",
    description:
      "Formation de base pour apprendre à piloter un drone de moins d’un kilo.",
    price: 25,
    image: "/images/formations/drone-cover.jpg",
    type: 1,
  },
  {
    name: "Be Premiere",
    longName: "Apprendre les fonctionnalité de Adobe Premiere",
    hours: 18,
    required: "Savoir utiliser le système d’exploitation Windows 7",
    description:
      "La formation Adobe Premiere Pro CC permettra d’apprendre l’essentiel des fonctionnalités et savoir faire un montage vidéo A à Z.",
    price: 25,
    image: "/images/formations/premiere-cover.jpg",
    type: 2,
  },
  {
    name: "Be After Effect",
    longName: "Apprendre les fonctionnalité de Adobe After Effect",
    hours: 18,
    required: "Savoir utiliser le système d’exploitation Windows 7",
    description:
      " Apprentissage de l’essentiel des fonctionnalités de Adobe After Effect, savoir filmer sur fond vert et l’utiliser sur After Effect.",
    price: 25,
    image: "/images/formations/after-cover.jpg",
    type: 2,
  },
  {
    name: "Be Illustrator",
    longName: "Apprendre les fonctionnalité de Adobe Illustrator",
    hours: 18,
    required: "Savoir utiliser le système d’exploitation Windows 7",
    description:
      "La formation Illustrator CC permettra d’apprendre l’essentiel des fonctionnalités et savoir créer un Logo et faire de l’illustration en vectoriel pour le web et le print.",
    price: 25,
    image: "/images/formations/illustrator-cover.jpg",
    type: 2,
  },
  {
    name: "Be Photoshop",
    longName: "Apprendre les fonctionnalité de Adobe Photoshop",
    hours: 18,
    required: "Savoir utiliser le système d’exploitation Windows 7",
    description:
      "La formation Photoshop CC permettra d’apprendre l’essentiel des fonctionnalités et savoir réalisé des photomontage, des retouches photo, création de flyers pour le web et le print.",
    price: 25,
    image: "/images/formations/photoshop-cover.jpg",
    type: 2,
  },
  {
    name: "Be HTML5",
    longName: "Apprendre les fondamentaux du language  de HTML 5",
    hours: 18,
    required: "Savoir utiliser le système d’exploitation Windows 7",
    description:
      "La formation permet au futur webdesigner de savoir utiliser le language HTML 5 afin de pouvoir créer des sites internet, savoir référencer, comprendre le webmarketing.",
    price: 25,
    image: "/images/formations/html-cover.jpg",
    type: 3,
  },
  {
    name: "Be CSS3",
    longName: "Apprendre les fondamentaux du language  CSS 3",
    hours: 18,
    required: "Savoir utiliser le système d’exploitation Windows 7",
    description:
      "La formation permet au futur webdesigner de savoir utiliser le language CSS 3 afin de pouvoir créer la partie graphique d’un site internet avec son design et ses animations.",
    price: 25,
    image: "/images/formations/css-cover.jpg",
    type: 3,
  },
  {
    name: "Be Informatique de base",
    longName: "Apprendre à utiliser sa tablette, son ordinateur et son smartphone",
    hours: 18,
    required: "Aucun",
    description:
      "Aujourd’hui, les entreprises, hôpitaux, banques devienne accessible notamment via l’informatique, que ce soit par les applications homebanking, la prise de rendez-vous via leur site internet, la consultation de leur dossier médical en ligne. Malheureusement cela peut handicaper fortement un public n’ayant jamais connu le monde de l’informatique notamment les séniors.",
    price: 25,
    image: "/images/formations/computer-cover.jpg",
    type: 4,
  },
  {
    name: "Be Final Cut",
    longName: "Montage Vidéo",
    hours: 18,
    required: "Aucun",
    description:
      "Réalisé des montages vidéo numérique avec Final Cut pro x",
    price: 25,
    image: "/images/formations/cut-cover.jpg",
    type: 2,
  },
  {
    name: "Be Javascript",
    longName: "Apprendre les fondamentaux du language  Javascript",
    hours: 24,
    required: "Connaître les fondamentaux des langages HTML 5 et CSS 3",
    description:
      "La formation permet au futur webdesigner de savoir utiliser le langage Javascript afin de pouvoir créer des sites internet dynamiques, personnaliser et perfectionner un site web.",
    price: 25,
    image: "/images/formations/javascript-cover.jpg",
    type: 5,
  },
  {
    name: "Be Python",
    longName: "Apprendre les fondamentaux du langage python",
    hours: 18,
    required: "Aucun",
    description:
      "La formation permet au futur programmeur d'application de savoir utiliser le langage python afin de pouvoir créer des logiciels et comprendre les bases de la programmation",
    price: 25,
    image: "/images/formations/python-cover.jpg",
    type: 5,
  },
];

function FormationsMulti() {
  return (
    <>
    <Tabs defaultActiveKey="1" onChange={callback} className="ml-5">
    <TabPane tab="" key="7">
    </TabPane>
    <TabPane tab="Vidéo" key="1">
    {formations.map((formation) => (
        <div key={formation.name} className="">
        {formation.type == 1 ? <FormationCard formation = {formation}></FormationCard> : ''}
         </div>
      ))}
    </TabPane>
    <TabPane tab="Logiciel" key="2">
    {formations.map((formation) => (
        <div key={formation.name} className="">
        {formation.type == 2 ? <FormationCard formation = {formation}></FormationCard> : ''}
         </div>
      ))}
    </TabPane>
    <TabPane tab="Web" key="3">
    {formations.map((formation) => (
        <div key={formation.name} className="">
        {formation.type == 3 ? <FormationCard formation = {formation}></FormationCard> : ''}
         </div>
      ))}
    </TabPane>
    <TabPane tab="Bureautique" key="4">
    {formations.map((formation) => (
        <div key={formation.name} className="">
        {formation.type == 4 ? <FormationCard formation = {formation}></FormationCard> : ''}
         </div>
      ))}
    </TabPane>
    <TabPane tab="Programmation" key="5">
    {formations.map((formation) => (
        <div key={formation.name} className="">
        {formation.type == 5 ? <FormationCard formation = {formation}></FormationCard> : ''}
         </div>
      ))}
    </TabPane>
    <TabPane tab="" key="8">
    </TabPane>
    </Tabs>
      <style jsx>{`
        .image {
          width: 50vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default FormationsMulti;
