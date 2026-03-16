import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { CommunityTools } from "@/components/CommunityTools";
import { BlogPreview } from "@/components/BlogPreview";
import { UseCases } from "@/components/UseCases";
import { Vision } from "@/components/Vision";

import { getAllPosts } from "@/lib/blog-utils";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <UseCases />
        <Pricing />
        <Vision />
        <CommunityTools />
        <BlogPreview posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
