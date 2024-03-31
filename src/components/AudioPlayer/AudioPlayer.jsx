import { useState, useEffect } from "react";

const AudioPlayer = ({ audioPath }) => {
  const [audio] = useState(new Audio(audioPath));

  useEffect(() => {
    const playAudio = () => {
      audio.loop = true;
      audio.play();
    };

    // Play the audio
    playAudio();

    return () => {
      if (audio.currentTime > 0 && !audio.paused && !audio.ended) {
        audio.loop = false;
        audio.pause();
      }
    };
  }, []);

  return <></>;
};

export default AudioPlayer;
