const Road = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10vh",
        left: "0px",
        height: "100px",
        background: "var( --black-200)",
        display: "flex",
        animation: "slide-right 20s linear infinite",
      }}
    >
      {new Array(100).fill(1).map((x, y) => (
        <Marker key={`marker-${y}`} />
      ))}
    </div>
  );
};

export default Road;

const Marker = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginTop: "5px",
          width: "200px",
          height: "5px",
          background: "var(--white-400)",
        }}
      />
      <div
        style={{
          width: "50px",
          height: "5px",
          background: "var(--white-400)",
        }}
      />

      <div
        style={{
          marginBottom: "5px",
          width: "200px",
          height: "5px",
          background: "var(--white-400)",
        }}
      />
    </div>
  );
};
