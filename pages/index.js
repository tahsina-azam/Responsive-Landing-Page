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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <WhiteNav />
      <BlackNav />
      <HeroIntro imgUrl="figureAll.png" />
      <HeroIntro imgUrl="figureIphoneMax.png" />
      <HeroIntro imgUrl="figureIphone15.png" />
      <SideBySide />
      <SideBySideRow2 />
      <SideBySideRow3 />
      <TabPanelCarousel />
      <TabList />
      <AdCarousel />
      <Footer />
    </div>
  );
}
