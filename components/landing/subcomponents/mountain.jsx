const Mountain = ({ color, index }) => {
  const height = 150 - index * 2;

  const noise = Math.floor(Math.random() * 20);
  const width = 100 + noise;

  return (
    <div
      style={{
        height: "0px",
        width: "0px",
        background: "transparent",
        borderBottom: `${height}px solid var(${color})`,
        borderRight: `${width}px solid transparent`,
        borderLeft: `${width}px solid transparent`,
        scale: "110% 100%",
      }}
    />
  );
};

export default Mountain;
