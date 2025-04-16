import Navbar from "./components/navbarComp/navbar";
import SliderBanner from "./components/slideBanner/sliderBanner";
import ClanRT from "./layout/pengurusrt/clanRT";
import Styles from "./global.module.scss";
import RTOfficialsSlider from "./components/slideBanner/rtOfficialsSlider";

export default function Home() {
  return (
    <>
      <div className={`${Styles.pageContainer}`}>
        {/* <div className="text-gray-950">Frontend</div> */}
        <Navbar />
        <SliderBanner />
        <ClanRT />
        <RTOfficialsSlider />
      </div>
    </>
  );
}
