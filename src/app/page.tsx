import { Hero } from "@/components/home/Hero";
import { FeaturedIn } from "@/components/home/FeaturedIn";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Mission } from "@/components/home/Mission";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { ContactStrip } from "@/components/home/ContactStrip";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedIn />
      <SelectedWork />
      <Testimonials />
      <HowItWorks />
      <Features />
      {/* <Mission /> */}
      <Pricing />
      <FAQ />
      <ContactStrip />
    </div>
  );
}
