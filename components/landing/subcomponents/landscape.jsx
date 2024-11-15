import Row from "./row";
import Cloud from "./cloud";
import Sun from "./sun";

const Landscape = () => {
  const colors = [
    "--white-100",
    "--white-200",
    "--white-300",
    "--white-400",
    "--black-100",
    "--black-200",
    "--primary-100",
    "--primary-200",
    "--primary-300",
  ];
  return (
    <div
      style={{
        width: "100vw",
        height: "70vh",
        display: "flex",
        position: "relative",
      }}
    >
      <Sun />
      <Cloud />
      <div style={{ position: "relative" }}>
        {colors.map((col, index) => (
          <Row color={col} index={index} key={`mountain-row-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Landscape;
