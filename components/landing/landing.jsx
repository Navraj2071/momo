import Landscape from "./subcomponents/landscape";
import Foreground from "./subcomponents/foreground";
import Texts from "./subcomponents/texts/texts";

const Landing = () => {
  return (
    <div>
      <Texts />
      <Landscape />
      <Foreground />
    </div>
  );
};

export default Landing;
