import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import PrayerTimes from "@/components/home/PrayerTimes/PrayerTimes";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <PrayerTimes />
    </div>
  );
}
