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
        <ScrollAnimation delay={0.2}>
          <SliderBanner />
        </ScrollAnimation>
        <ScrollAnimation delay={0.8}>
          <RTOfficialsSlider />
        </ScrollAnimation>
        <ScrollAnimation delay={1}>
          <AgendaKegiatanRT />
        </ScrollAnimation>
      </div>
    </>
  );
}
