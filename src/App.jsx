import "./App.css";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { TextOne, TextTwo } from "./components/Texts";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <TextOne />
      <Carousel />
      <Hero />
      <TimeLine />
      <TextTwo />
      <Footer />
    </>
  );
}

export default App;
