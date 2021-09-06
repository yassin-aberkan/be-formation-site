import Layout from "../../components/layout";
import FormationsMulti from "../../components/formations-multi";
import "../../styles/home.module.css";

export default function Multimedia() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - multimedia">
        <div className="pt-20">
          <div
            className="w-full bg-center bg-cover lg:h-96 h-screen image"
          >
            <div className="flex items-center justify-center w-full lg:h-96 h-full bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <h1 className="text-2xl  leading-8 font-extrabold tracking-tight text-white uppercase lg:text-3xl">
                  Audiovisuel et Multimédia
                </h1>
                <span className="w-full px-4 py-2 mt-4 text-sm font-medium text-white ">
                Initier et former aux nouveaux médias
                </span>
              </div>
            </div>
          </div>
          <FormationsMulti></FormationsMulti>
        </div>
      </Layout>
      <style jsx>{`
        .image {
          /* The image used */
          /*background-image: url("/images/formations/multi-cover.jpg");*/
          background: url(/images/formations/multi-cover.jpg);
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
