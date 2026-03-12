import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HyggeSection from "@/components/HyggeSection";
import Locations from "@/components/Locations";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BellevueSpotlight from "@/components/BellevueSpotlight";
import RoastersSection from "@/components/RoastersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <HyggeSection />
      <Locations />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <BellevueSpotlight />
      <RoastersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
