import { motion } from "framer-motion";
import Logos from "../components/logos";

export default function HomeImage({}) {
  return (
    <div>
      <div className=" bg-Image w-90 h-90">
        <div className="h-full flex flex-col justify-between items-center">
          <span></span>
          <div className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <span className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-gray-600 sm:text-6xl mr-2 md:mr-4">
                Be
              </span>
              <span className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-6xl">
                Formation
              </span>
              <p className="mt-4  text-xl text-gray-100 lg:mx-auto text-shadow">
                Se former aus outils Infographique, informatique et Webdesign et
                bien plus !
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
            </div>
          </div>
          <motion.div
            initial={{opacity:0}}
            className="w-full"
            animate={{opacity:1}}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Logos></Logos>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .bg-Image {
          /* The image used */
          /*background-image: url("/images/study-backgrounf.jpg");*/
          background: linear-gradient(
              rgba(78, 109, 113, 0.1),
              rgba(99, 133, 142, 0.4)
            ),
            url(/images/formations/multi-cover.jpg);
          /* Full height */
          width: 100%;
          height: 100vh;

          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .text-shadow {
          text-shadow: 1px 1px 2px gray;
        }
      `}</style>
    </div>
  );
}
