import Navbar from "./components/navbarComp/navbar";
import SliderBanner from "./components/slideBanner/sliderBanner";
import Styles from "./global.module.scss";
import RTOfficialsSlider from "./layout/pengurusrt/rtOfficialsSlider";

export default function Home() {
  return (
    <>
      <div className={`${Styles.pageContainer}`}>
        {/* <div className="text-gray-950">Frontend</div> */}
        <Navbar />
        <SliderBanner />
        <RTOfficialsSlider />
      </div>
    </>
  );
}
