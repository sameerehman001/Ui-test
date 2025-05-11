import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/topbar/TopBar";
import ImageMain from "./sections/ImageMain";
import ImageRow from "./sections/ImageRow";
import LatestSection from "./sections/LatestSection";
import PopularSection from "./sections/PopularSection";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ImageMain />
      <PopularSection />
      <ImageRow />
      <LatestSection />
      <Footer />
    </>
  );
}

export default App;
