import About from "./Components/About";
import Cards from "./Components/Cards";
import ClientsReviewPage from "./Components/ClientsReviewPage";
import Eyes from "./Components/Eyes";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Marque from "./Components/Marque";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen text-black">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Features />
      <ClientsReviewPage />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
