import Road from "./road";
import Tree from "./tree";
import Logo from "@/components/logo/logo";

const Foreground = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "30vh",
        background: "var(--white-300)",
        position: "relative",
      }}
    >
      <Road />
      <Tree />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "40%",
          transform: "translate(-50%,0%)",
        }}
      >
        <Logo isAnimated height={50} />
      </div>
    </div>
  );
};

export default Foreground;
