import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { CommunityTools } from "@/components/CommunityTools";
import { BlogPreview } from "@/components/BlogPreview";
import { UseCases } from "@/components/UseCases";
import { Vision } from "@/components/Vision";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <UseCases />
        {/* <Pricing /> */}
        <Vision />
        <CommunityTools />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
