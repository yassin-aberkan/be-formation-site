import Layout from "../components/layout";
import GoogleMaps from "../components/google-maps";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="">
      <Layout
        className="landingOther"
        page="Be Formation - Contacte"
      >
        <div className=" bg-Image">
        <div className="pt-28 mb-10  text-4xl md:text-6xl tracking-wide font-bold ">
          <span className="text-gray-50">Contactez</span><span className="text-gray-800">-nous !</span>
          </div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}}
            transition={{ delay: 0, duration: 1 }} className="max-w-6xl md:space-y-0 md:grid md:grid-cols-2 md:gap-y-10 mx-10 lg:mx-auto">
            <div className="bg-gray-800 md:py-12 py-8 md:rounded-l-md px-8 md:text-left h-full shadow-lg md:space-y-14 space-y-8">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="md:text-4xl text-2xl text-gray-100"></FaMapMarkerAlt>
                <div className="ml-4 md:text-xl tracking-wide font-semibold md:w-50 text-gray-100">
                Rue josaphat 99, 1030 Schaerbeek
                </div>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaPhone className="md:text-4xl text-2xl text-gray-100"></FaPhone>
                <div className="ml-4 md:text-xl tracking-wide font-semibold w-40 text-gray-100">
                  +32 1234567890
                </div>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FaEnvelope className="md:text-4xl text-2xl text-gray-100"></FaEnvelope>
                <div className="ml-4 md:text-xl tracking-wide font-semibold w-40 text-gray-100">
                asblbeformation@gmail.com
                </div>
              </div>
            </div>
            <div className="text-4xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-6xl bg-gray-200 h-full shadow-lg">
              <GoogleMaps className="md:rounded-r-md"></GoogleMaps>
            </div>
          </motion.div>
        </div>
      </Layout>
      <style jsx>{`
      .bg-Image {
        background: linear-gradient(
            rgba(78, 109, 113, 0.1),
            rgba(99, 133, 142, 0.4)
          ),
          url(/images/bg-contact.jpg);
        /* Full height */
        width: 100%;
        height: 100vh;
        min-height: 600px;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      @media (min-width: 640px) {
        .bg-Image {
          background: linear-gradient(
              rgba(78, 109, 113, 0.1),
              rgba(99, 133, 142, 0.4)
            ),
            url(/images/bg-contact.jpg);
          /* Full height */
          width: 100%;
          height: 91.5vh;

          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
      `}</style>
    </div>
  );
}
