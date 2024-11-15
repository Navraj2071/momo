const TreeLine = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0%",
        display: "flex",
        animation: "slide-right 100s linear infinite",
      }}
    >
      {new Array(1000).fill(1).map((x, y) => (
        <Tree key={`tree-${y}`} />
      ))}
    </div>
  );
};

const Tree = () => {
  const y = Math.round(Math.random() * 50);
  return (
    <div
      style={{
        position: "relative",
        width: "30px",
        height: "10vh",
      }}
    >
      <Triangle height={40} width={5} color={"--black-200"} y={y} />
      <Triangle height={15} width={10} color={"--primary-100"} y={y + 30} />
      <Triangle height={15} width={15} color={"--primary-100"} y={y + 20} />
      <Triangle height={15} width={20} color={"--primary-100"} y={y + 10} />
    </div>
  );
};

export default TreeLine;

const Triangle = ({ height, width, color, y }) => (
  <div
    style={{
      height: "0px",
      width: "0px",
      background: "transparent",
      borderBottom: `${height}px solid var(${color})`,
      borderRight: `${width}px solid transparent`,
      borderLeft: `${width}px solid transparent`,
      scale: "110% 100%",
      position: "absolute",
      left: "50%",
      bottom: `${y}px`,
      transform: "translate(-50%,0%)",
    }}
  />
);
