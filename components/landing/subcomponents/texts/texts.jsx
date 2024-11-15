"use client";
import { useState, useEffect } from "react";
import Logo from "@/components/logo/logo";
import style from "./texts.module.css";

const Texts = () => {
  const [selectedText, setSelectedText] = useState(0);
  const Text1 = () => (
    <div className={style.textEffect}>
      Welcome,
      <br />
      surfer of the web
    </div>
  );
  const Text2 = () => <div className={style.textEffect}>Relax for a bit</div>;
  const Text3 = () => (
    <div className={style.textEffect}>You've been stressed for a while</div>
  );
  const Text4 = () => (
    <div className={style.textEffect}>Take a deep breath</div>
  );
  const Text5 = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "rgba(255,255,255,0.7)",
        borderRadius: "200px",
        boxShadow: "0 0 10px 10px rgba(255,255,255,0.7)",
      }}
      className={style.textEffect}
    >
      <div
        style={{
          height: "50px",
          width: "220px",
          position: "relative",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0%",
          }}
        >
          <Logo height={50} />
        </div>
      </div>
      <div style={{ fontSize: "1rem" }}>is</div>
      coming soon
    </div>
  );

  const texts = [<Text1 />, <Text2 />, <Text3 />, <Text4 />, <Text5 />];

  useEffect(() => {
    const myInterval = setInterval(() => {
      setSelectedText((prev) => {
        if (prev === 4) return 4;
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(myInterval);
  }, []);

  return (
    <div
      style={{
        color: "blue",
        fontSize: "3rem",
        fontWeight: "600",
        position: "fixed",
        left: "50%",
        transform: "translate(-50%)",
        textAlign: "center",
        zIndex: 5,
        color: "var(--white-100)",
        marginTop: "100px",
        textShadow: "0 0 10px var(--black-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding: "100px",
      }}
    >
      {texts[selectedText]}
      {/* <Text5 /> */}
    </div>
  );
};

export default Texts;
