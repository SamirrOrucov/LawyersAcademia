import React from "react";
import AboutSliderSection from "../components/HomeComponents/AboutSliderSection/AboutSliderSection";
import ContactUsComponent from "../components/HomeComponents/ContactUsComponent/ContactUsComponent";
import VideosSection from "../components/HomeComponents/VideosSection/VideosSection";

function Home() {
  return (
    <div>
      <AboutSliderSection />
      <VideosSection />
      <ContactUsComponent />
    </div>
  );
}

export default Home;
