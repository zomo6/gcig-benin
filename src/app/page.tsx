import AboutUs from "@/Components/AboutUs";
import CTA from "@/Components/CTA";
import Galery from "@/Components/Galery";
import Services from "@/Components/Services";
import Hero from "@/Components/Hero";
import Horo from "@/Components/Horo";
import Garanty from "@/Components/Garanty";
import Proof from "@/Components/Proof";
import Testimony from "@/Components/Testimony";
import First from "@/Components/First";
import About from "@/Components/About";
import Ecologie from "@/Components/Ecologie";

export default function Home() {
  return (
    <div className="relative temp  overflow-hidden ">

        {/* <Horo/> */}
        <Hero/> 
        {/* <First/>  */}
        {/* <AboutUs/>  */}
        <About/>
        <Services/> 
        <Ecologie/>
        <Galery/> 
        <Garanty/> 
        <Proof/> 
        <Testimony/> 
        <CTA/>
        
    </div>
  );
}
