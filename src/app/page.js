import Image from "next/image";
import HeroSection from "./compenents/HeroSection";
import Navbar from "./compenents/Navbar";
import AboutSection from "./compenents/AboutSection";
import ProjectsSection from "./compenents/ProjectsSection";
import EmailSection from "./compenents/EmailSection";
import FooterSection from "./compenents/FooterSection";
import AchievementsSection from "./compenents/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
        <FooterSection />
    </main>
  );
}
