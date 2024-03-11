
import React from "react";
import AboutSliderSection from "../components/AboutSliderSection/AboutSliderSection";
import ContactUsComponent from "../components/ContactUsComponent/ContactUsComponent";

import React from 'react'
import "./Home.scss"
import VideosSection from '../components/HomeComponents/VideosSection/VideosSection'

function Home() {
  return (
    <div>

   
  

      <AboutSliderSection />
    <VideosSection/>

      <ContactUsComponent/>
    </div>
  );

   
   
  
}

export default Home;
