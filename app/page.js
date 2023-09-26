import Hero from "./components/Hero";
import Descubre from "./components/Descubre";
import About from "./components/About";
import ImagesGallery from "./components/ImagesGallery";
import Tasasiones from "./components/Tasasiones";
import Maps from "./components/Maps";
import Contactate from "./components/Contactate";
import MediosContact from "./components/MediosContact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Descubre />
      <About />
      <ImagesGallery />
      <Tasasiones />
      <Maps />
      <Contactate />
      <MediosContact />
      <Footer />
    </main>
  );
}
