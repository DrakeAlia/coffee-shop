import Nav from "@/components/Nav";
import NowBrewing from "@/components/NowBrewing";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HyggeSection from "@/components/HyggeSection";
import Locations from "@/components/Locations";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import MoodSection from "@/components/MoodSection";
import Testimonials from "@/components/Testimonials";
import BellevueSpotlight from "@/components/BellevueSpotlight";
import RoastersSection from "@/components/RoastersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
      <Nav />
      <NowBrewing />
      <div className="sticky top-0 z-10 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <Hero />
      </div>
      <div className="sticky top-0 z-20 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <Marquee />
      </div>
      <div className="sticky top-0 z-30 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <HyggeSection />
      </div>
      <div className="sticky top-0 z-40 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <Locations />
      </div>
      <div className="sticky top-0 z-50 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <MenuSection />
      </div>
      <div className="sticky top-0 z-60 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <Gallery />
      </div>
      <div className="sticky top-0 z-70 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <MoodSection />
      </div>
      <div className="sticky top-0 z-80 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <Testimonials />
      </div>
      <div className="sticky top-0 z-90 w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <BellevueSpotlight />
      </div>
      <div className="sticky top-0 z-[100] w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <RoastersSection />
      </div>
      <div className="sticky top-0 z-[110] w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <ContactSection />
      </div>
      <div className="sticky top-0 z-[120] w-full will-change-transform sm:rounded-tl-[2px] sm:rounded-tr-[2px]">
        <Footer />
      </div>
    </main>
  );
}
