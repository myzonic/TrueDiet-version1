import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SplashCursor from "@/components/SplashCursor";
import Marquee from "@/components/Marquee";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import StatsStrip from "@/components/sections/StatsStrip";
import Mission from "@/components/sections/Mission";
import About from "@/components/sections/About";
import NutritionEducation from "@/components/sections/NutritionEducation";
import TrustPhilosophy from "@/components/sections/TrustPhilosophy";
import Testimonials from "@/components/sections/Testimonials";
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
      <SplashCursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Credibility />
        <SectionDivider />
        <StatsStrip />
        <SectionDivider />
        <TracingBeam>
          <Mission />
          <SectionDivider />
          <About />
          <SectionDivider />
          <NutritionEducation />
          <SectionDivider />
          <TrustPhilosophy />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <AppComingSoon />
          <SectionDivider />
          <FutureContent />
          <SectionDivider />
          <FAQ />
        </TracingBeam>
        <SectionDivider />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
