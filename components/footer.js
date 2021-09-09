export default function footer({}) {
  return (
    <div className="text-center z-50">
      <div className=" footer-height flex justify-center px-4 text-gray-100 bg-gray-800">
        <div className="container py-6">

        

          <div className="flex flex-col items-center justify-between  md:flex-row">
            <div>
              <a href="#" className="text-xl font-bold text-white">
                Be Formation
              </a>
            </div>
            <span className="text-gray-400">Be Formation © 2021</span>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <a href="#" className="px-4 text-sm text-white">
                  Accueil
                </a>
                <a href="#" className="px-4 text-sm text-white">
                À propos
                </a>
                <a href="#" className="px-4 text-sm text-white">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-height {
        }
      `}</style>
    </div>
  );
}
