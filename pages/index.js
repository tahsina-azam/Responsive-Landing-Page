import Image from "next/image";
import { Inter } from "next/font/google";
import WhiteNav from "../components/WhiteNav";
import BlackNav from "../components/BlackNav";
import HeroIntro from "../components/HeroIntro";
import SideBySide from "../components/SideBySide";
import SideBySideRow2 from "../components/SideBySideRow2";
import SideBySideRow3 from "../components/SideBySideRow3";
import TabPanelCarousel from "../components/TabPanelCarousel";
import TabList from "../components/TabList";
import AdCarousel from "../components/AdCarousel";
import Footer from "../components/Footer";
import DynamicHeroIntro from "../components/DynamicHeroIntro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <WhiteNav />
      <BlackNav />
      <DynamicHeroIntro imgUrl="figureAll.png" />
      <HeroIntro
        imgUrl="figureIphoneMax.png"
        style="text-white  md:font-bold text-3xl"
        color="text-white"
        heading="iPhone 15 Pro"
        text="Titanium. So strong. So light. So Pro."
      />
      <HeroIntro
        imgUrl="figureIphone15.png"
        style="text-black md:font-bold text-3xl"
        heading="iPhone 15"
        text="New camera. New design. Newphoria."
      />
      <SideBySide />
      <SideBySideRow2
        style="text-black md:font-bold text-3xl"
        heading="Macbook Air"
        text="Lean. Mean. M3 machine."
        color="text-black"
        styles="text-white md:font-bold text-3xl"
        headings="Watch"
        texts="Smarter. Brighter. Mightier."
        colors="text-white"
      />
      <SideBySideRow3
        style="text-black md:font-bold text-3xl"
        heading="Card"
        text1="Get up to 3% Daily Cash back"
        text2="with every purchase."
        color="text-black"
        headings="Trade In"
        texts1="Get $180-$630 in credit when you"
        texts2="trade in iPhone 11 or higher.1"
      />
      <TabPanelCarousel />
      <TabList />
      <AdCarousel />
      <Footer />
    </div>
  );
}
