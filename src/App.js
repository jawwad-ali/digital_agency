import Approach from "./components/Approach";
import DesignPartners from "./components/DesignPartners";
import Footer from "./components/Footer";
import Globe from "./components/Globe";
import HeroSection from "./components/HeroSection";
import Info from "./components/Info";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Globe />
      <Info />
      <Approach /> 
      <Partners />
      <DesignPartners />
      <Footer />
    </div>
  );
}

export default App; 
