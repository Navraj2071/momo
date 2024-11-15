import Landscape from "./subcomponents/landscape";
import Foreground from "./subcomponents/foreground";
import Texts from "./subcomponents/texts/texts";
import Music from "./subcomponents/music/music";

const Landing = () => {
  return (
    <div>
      <Texts />
      <Landscape />
      <Foreground />
      <Music />
    </div>
  );
};

export default Landing;
