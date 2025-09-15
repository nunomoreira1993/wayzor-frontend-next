import HeroSection from "@/components/HeroSection";
import SearchWidget from "@/components/SearchWidget";
import FeaturesSection from "@/components/FeaturesSection";
import DiscoverSection from "@/components/DiscoverSection";
import BlogSection from "@/components/BlogSection";
import PartnersSection from "@/components/PartnersSection";
import SocialSection from "@/components/SocialSection";

export default function Index() {
  return (
    <main className="font-lato">
      <HeroSection />
      <SearchWidget />
      <FeaturesSection />
      <DiscoverSection />
      <BlogSection />
      <PartnersSection />
      <SocialSection />
    </main>
  );
}
