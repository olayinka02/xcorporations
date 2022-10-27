import React from "react";
import BottomNav from "./BottomNav";
import FeaturesPage from "./FeaturesPage";
import HeroSection from "./HeroSection";
import Howitwork from "./Howitwork";


import NavBodyx from "./NavBodyx";
import Newsletter from "./Newsletter";
import TestimonialPage from "./TestimonialPage";






function LandingPage (){
  return (
  <div>
 <NavBodyx />
 <HeroSection />
 <Howitwork />
 <FeaturesPage />
 <TestimonialPage />
 <Newsletter />
 <BottomNav />
 {/* <FinalDashboard /> */}
  </div>

  
   
  
  );

}
export default LandingPage;


