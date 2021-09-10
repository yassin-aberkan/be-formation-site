import Image from "next/image";
function FormationCard({formation}) {
  return (
    <>
      <div className="text-gray-600 body-font overflow-hidden text-left lg:ml-48 lg:py-10 mb-10 lg:mb-0  lg:mt-0">
        <div className="">
          <div className="flex flex-wrap lg:flex-nowrap">
            <img
              alt={formation.name + " image"}
              src={formation.image}
              className=" object-cover lg:h-auto lg:w-1/4 w-full h-96 lg:rounded-lg"
            ></img>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 lg:mr-20 lg:mx-0 mx-10 mb-20 lg:pt-20">
              <h2 className="text-lg title-font text-gray-500 tracking-widest">
                {formation.name}
              </h2>
              <h1 className="text-gray-800 text-3xl title-font font-medium mb-1">
                {formation.longName}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="">Pré-requis</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-600 space-x-2">
                  {formation.required}
                </span>
              </div>
              <p className="leading-relaxed">{formation.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-600 mb-5">
                Nombre d&lsquo;heures :{" "}
                <span className="ml-1">{formation.hours}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-700">
                  {formation.price}€ / heure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image {
          width: 50vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default FormationCard;
