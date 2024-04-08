import Carousel from "../components/Carousel";
import CollapseComponent from "../components/CollapseComponent";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

import { TextOne, TextTwo } from "../components/Texts";
import TimeLine from "../components/TimeLine";
import Footer from "./../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <TextOne />
      <Carousel />
      <Hero />
      <TimeLine />
      <TextTwo />
      <CollapseComponent />
      <Footer />
    </>
  );
}
export default Home;
