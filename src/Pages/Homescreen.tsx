import Home from "./Home";
import Button from "./button";
import Welcome from "./Welcom";
import Awesome from "./Awesome";
import HowItWorks from "./HowItWorks";
import Additional from "./Final";
import ImageScroll from "./ImageScroll";
import Pricing from "./Pricing";
import ScreenShots from "./AppScreenShot";
import Achievements from "./Achievement";
import Demovid from "./DemoVid";
import Template from "./Template";
import Team from "./Team";
import News from "./AppNews";
import Twitter from "./Tweet";
import Subscribe from "./Subscribe";
import InTouch from "./GetInTouch";
import { Mobile } from "./Mobile";
import Hero from "./MobileHero";
export const Homescreen = () => {
  return (
    <div>
      <Home />
      <Welcome />
      <Awesome />
      <HowItWorks />
      <Additional />
      <ImageScroll />
      <Pricing />
      <ScreenShots />
      <Achievements />
      <Demovid />
      <Template />
      <Team />
      <News />
      <Twitter />
      <Subscribe />
      <InTouch />
      {/* <Mobile />
      <Hero /> */}
    </div>
  );
};
