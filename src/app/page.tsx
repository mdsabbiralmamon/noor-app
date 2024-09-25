import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import MosqueDev from "@/components/home/MosqueDev/MosqueDev";
import PrayerTimes from "@/components/home/PrayerTimes/PrayerTimes";
import School from "@/components/home/School/School";
import './page.css';
import FivePillars from "@/components/home/FivePillars/FivePillars";
import Events from "@/components/home/Events/Events";
import Support from "@/components/home/Support/Support";
import Blog from "@/components/home/Blog/Blog";
import Newsletter from "@/components/ui/newsletter";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <PrayerTimes />
      <div className="curveSectionBG">
        <School />
        <MosqueDev />
      </div>
      <FivePillars />
      <Events />
      <Support />
      <Blog />
      <div className="relative bg-gray-50 py-20">
        <div className="absolute inset-0 bg-white h-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div>
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
}
