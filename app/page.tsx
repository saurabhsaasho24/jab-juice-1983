import FlavorSection from "@/components/sections/FlavorSection";
import HeroSection from "@/components/sections/HeroSection";
import JabExperienceSection from "@/components/sections/JabExperienceSection";
import JabMerchSection from "@/components/sections/JabMerchSection";
import JabMomentsSection from "@/components/sections/JabMomentsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <JabExperienceSection />
      <FlavorSection />
      <JabMomentsSection />
      <JabMerchSection />
      {/* Add other homepage sections here */}
    </main>
  );
}