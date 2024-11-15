import React from "react";

const Logo = ({ height, isAnimated }) => {
  const halfWidth = Math.floor((height * 8) / 20);
  return (
    <div style={{ position: "relative" }}>
      {/* M---------------------------------------------- */}
      <div
        style={{
          height: "0px",
          width: "0px",
          background: "transparent",
          borderBottom: `${height}px solid var(--primary-300)`,
          borderRight: `${halfWidth}px solid transparent`,
          borderLeft: `${halfWidth}px solid transparent`,
          position: "absolute",
          bottom: "0px",
          left: "0px",
        }}
      />
      <div
        style={{
          height: "0px",
          width: "0px",
          background: "transparent",
          borderBottom: `${height}px solid var(--primary-200)`,
          borderRight: `${halfWidth}px solid transparent`,
          borderLeft: `${halfWidth}px solid transparent`,
          position: "absolute",
          bottom: "0px",
          left: `${halfWidth}px`,
        }}
      />

      {/* O---------------------------------------------- */}
      <div
        style={{
          height: `${height}px`,
          width: `${height}px`,
          borderRadius: `${height}px`,
          background: "transparent",
          border: `${halfWidth / 2}px solid var(--primary-300)`,
          position: "absolute",
          bottom: "0px",
          left: `${halfWidth * 3}px`,
          animation: isAnimated ? "bounce 1s infinite" : "none",
        }}
      />

      {/* M---------------------------------------------- */}

      <div
        style={{
          height: "0px",
          width: "0px",
          background: "transparent",
          borderBottom: `${height}px solid var(--primary-300)`,
          borderRight: `${halfWidth}px solid transparent`,
          borderLeft: `${halfWidth}px solid transparent`,
          position: "absolute",
          bottom: "0px",
          left: `${halfWidth * 5.5}px`,
        }}
      />
      <div
        style={{
          height: "0px",
          width: "0px",
          background: "transparent",
          borderBottom: `${height}px solid var(--primary-200)`,
          borderRight: `${halfWidth}px solid transparent`,
          borderLeft: `${halfWidth}px solid transparent`,
          position: "absolute",
          bottom: "0px",
          left: `${halfWidth * 6.5}px`,
        }}
      />

      {/* O--------------------------------------------- */}
      <div
        style={{
          height: `${height}px`,
          width: `${height}px`,
          borderRadius: `${height}px`,
          background: "transparent",
          border: `${halfWidth / 2}px solid var(--primary-300)`,
          position: "absolute",
          bottom: "0px",
          left: `${halfWidth * 8.5}px`,
          animation: isAnimated ? "bounce 1s infinite" : "none",
        }}
      />
    </div>
  );
};

export default Logo;
