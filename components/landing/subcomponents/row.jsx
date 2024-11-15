import Mountain from "./mountain";

const Row = ({ color, index }) => {
  const time = 1000;
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: `translate(-50%,0)`,
        animation: `slide-right linear ${time}s infinite `,
      }}
    >
      {new Array(100 + index * 30).fill(1).map((x, y) => (
        <Mountain
          color={color}
          index={index}
          key={`mountain-${x}-${y}-${index}`}
        />
      ))}
    </div>
  );
};

export default Row;
