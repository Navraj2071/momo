"use client";
import { useEffect, useRef, useState } from "react";
import Iconbutton from "@/components/subcomponents/button/iconbutton";
import Musicon from "@/components/subcomponents/button/icons/musicon";
import Musicoff from "@/components/subcomponents/button/icons/musicoff";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div style={{ position: "fixed", bottom: "20px", left: "20px" }}>
      <Iconbutton
        Icon={isPlaying ? Musicon : Musicoff}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <audio ref={audioRef} src={"/music.mp3"}></audio>
    </div>
  );
};

export default Music;
