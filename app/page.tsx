import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Marquee from "@/components/Marquee";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import StatsStrip from "@/components/sections/StatsStrip";
import Mission from "@/components/sections/Mission";
import About from "@/components/sections/About";
import NutritionEducation from "@/components/sections/NutritionEducation";
import TrustPhilosophy from "@/components/sections/TrustPhilosophy";
import AppComingSoon from "@/components/sections/AppComingSoon";
import FutureContent from "@/components/sections/FutureContent";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Credibility />
        <SectionDivider />
        <StatsStrip />
        <SectionDivider />
        <Mission />
        <SectionDivider />
        <About />
        <SectionDivider />
        <NutritionEducation />
        <SectionDivider />
        <TrustPhilosophy />
        <SectionDivider />
        <AppComingSoon />
        <SectionDivider />
        <FutureContent />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
