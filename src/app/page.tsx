import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import MosqueDev from "@/components/home/MosqueDev/MosqueDev";
import PrayerTimes from "@/components/home/PrayerTimes/PrayerTimes";
import School from "@/components/home/School/School";
import './page.css';

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
    </div>
  );
}
