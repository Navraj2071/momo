import React from "react";

const Cloud = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        display: "flex",
        animation: "slide-right 1000s linear infinite",
      }}
    >
      {new Array(20).fill(1).map((x, y) => (
        <SingleCloud key={`cloud-${y}`} index={y} />
      ))}
    </div>
  );
};

export default Cloud;

const SingleCloud = ({ index }) => {
  return (
    <div
      style={{
        width: "500px",
      }}
    >
      <div
        style={{
          position: "relative",
          scale: "100% 50%",
        }}
      >
        {new Array(6).fill(1).map((x, y) => (
          <SubCloud key={`sub-cloud-${index}-${y}`} />
        ))}
      </div>
    </div>
  );
};

const SubCloud = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);

  return (
    <div
      style={{
        background: "var(--white-100)",
        width: "100px",
        height: "100px",
        borderRadius: "100px",
        position: "absolute",
        top: `${x}px`,
        left: `${y}px`,
      }}
    />
  );
};
