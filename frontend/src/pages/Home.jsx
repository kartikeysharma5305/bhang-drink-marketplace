import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";
import { useEffect } from "react";

// Home component serves as the main landing page of the website
const Home = () => {
  // this is to redirect abd move the uses to the element that he clicked for
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top if no hash is provided
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* HeroSection displays the main banner or introductory section */}
      <div id="home"></div>
      <HeroSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </>
  );
};

export default Home;
