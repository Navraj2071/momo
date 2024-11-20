const Videocam = ({ fill, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height ? `${height}px` : "20px"}
      viewBox="0 -960 960 960"
      width={width ? `${width}px` : "20px"}
      fill={fill ? fill : "#ffffff"}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
    </svg>
  );
};

export default Videocam;
