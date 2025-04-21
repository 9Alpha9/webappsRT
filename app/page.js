import SliderBanner from "./components/slideBanner/sliderBanner";
import Styles from "./global.module.scss";
import { AgendaKegiatanRT } from "./layout/agendaRT/agendaKegiatanRT";
import RTOfficialsSlider from "./layout/pengurusrt/rtOfficialsSlider";
import ScrollAnimation from "./components/ScrollAnimation";
export default function Home() {
  return (
    <>
      {/* <div className="text-gray-950">Frontend</div> */}

      <div className={`${Styles.pageContainer} `}>
        <SliderBanner />
        <ScrollAnimation delay={1}>
          <RTOfficialsSlider />
        </ScrollAnimation>
        <ScrollAnimation delay={1.2}>
          <AgendaKegiatanRT />
        </ScrollAnimation>
      </div>
    </>
  );
}
