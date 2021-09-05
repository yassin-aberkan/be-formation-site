import Layout from "../components/layout";
import HomeImage from "../components/home-image";
import Discover from "../components/discover";
import "../styles/home.module.css";
export default function Home() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - Accueil">
        <div className="">
          <HomeImage></HomeImage>
          <Discover className="mx-60"></Discover>
        </div>
      </Layout>
    </div>
  );
}
