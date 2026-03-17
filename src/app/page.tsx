import { Hero } from "@/components/Hero";
import { DemoSection } from "@/components/DemoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { TrustSection } from "@/components/TrustSection";
import { CoreValue } from "@/components/CoreValue";
import { Pricing } from "@/components/Pricing";
import { Vision } from "@/components/Vision";
import { CommunityTools } from "@/components/CommunityTools";
import { BlogPreview } from "@/components/BlogPreview";
import { Footer } from "@/components/Footer";

import { getAllPosts } from "@/lib/blog-utils";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <Hero />
        <DemoSection />
        <HowItWorks />
        <ProblemSolution />
        <Features />
        <UseCases />
        <TrustSection />
        <CoreValue />
        <Pricing />
        <Vision />
        <CommunityTools />
        <BlogPreview posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
