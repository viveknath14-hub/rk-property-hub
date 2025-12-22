import { Button } from "@/components/ui/button"
import Banner from "./_components/Banner";
import About from "./_components/About";
import Catagory from "./_components/Catagory";
import Services from "./_components/Services";
import Features from "./_components/Features";

export default function Home() {
  return (
    <div className="container mx-auto">
    <Banner/>
    <About/>
    <Catagory/>
    <Services/>
    <Features/>
    </div>
    
  );
}
