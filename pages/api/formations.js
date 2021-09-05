export default function handler(req, res) {
    res.status(200).json([
        {
            name: "Be film",
            longName: "Savoir Filmer",
            hours: 18,
            required: [],
            description: "Cette formation s’adresse à toute personne voulant réaliser un contenu vidéo, que ce soit une capsule, un court métrage, reportage. Vous pourrez comprendre la méthodologie d’une bonne réalisation et ainsi pouvoir filmer un évènement, vidéo podcast, un voyage. Une partie théorique et ensuite pratique sera donné.",
            price: 0,
          },
          {
            name: "Be Photoshop",
            longName: "Apprendre les fonctionnalité de Adobe Photoshop",
            hours: 18,
            required: ["Savoir utiliser le système d’exploitation Windows 7"],
            description: "La formation Photoshop CC permettra d’apprendre l’essentiel des fonctionnalités et savoir réalisé des photomontage, des retouches photo, création de flyers pour le web et le print.",
            price: 0,
          },
          {
            name: "Be HTML5",
            longName: "Apprendre les fondamentaux du language  de HTML 5",
            hours: 18,
            required: ["Savoir utiliser le système d’exploitation Windows 7"],
            description: "La formation permet au futur webdesigner de savoir utiliser le language HTML 5 afin de pouvoir créer des sites internet, savoir référencer, comprendre le webmarketing.",
            price: 0,
          },
    ])
  }