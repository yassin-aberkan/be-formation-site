const images = [
    {
        name: 'photoshop',
        path: '/images/logos/photoshop.png'
    },
    {
        name: 'premiere',
        path: '/images/logos/premiere.png'
    },
    {
        name: 'css3',
        path: '/images/logos/css3.png'
    },
    {
        name: 'html',
        path: '/images/logos/html.png'
    },
    {
        name: 'aftereffect',
        path: '/images/logos/aftereffect.png'
    },
]

export default function Logos({ }) {
    return (
      <div className="bg-gradient-to-t from-gray-800 w-full h-28 sm:inline-flex items-center justify-center space-x-5 px-4" flex>
      <span className="text-base sm:text-lg font-medium text-white min-w-48">Formez vous avec les logiciels les plus populaires !</span>

        <div className="mt-4 sm:mt-0 inline-flex space-x-5">
      {images.map((image) => (
            <div key={image.name} className=" min-w-64">
                <img src={image.path} width={50} height={50} quality={100} alt={image.name + "name"}></img>
            </div>
      ))}
      </div>

      <style jsx>{`
        .vertical { 
            border-left: 2px solid white;
            border-radius: 2px;
            height: 70px; 
            display: inline-block;
            } 
      `}</style>
      </div>
    );
  }