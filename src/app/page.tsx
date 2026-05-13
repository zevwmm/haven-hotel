import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Rooms from "@/components/sections/Rooms";
import Experience from "@/components/sections/Experience";
import Dining from "@/components/sections/Dining";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Intro />
      <Rooms />
      <Experience />
      <Dining />
      <Testimonials />
      <Location />
      <CTAFinal />
      <Footer />
    </main>
  );
}
