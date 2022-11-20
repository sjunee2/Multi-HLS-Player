import ReactHlsPlayer from "react-hls-player/dist"
import { useRef } from "react";

export default function Player({ url }:{
  url: string
}) {

  const playerRef = useRef<HTMLVideoElement>(null);
  
  function playVideo() {
    playerRef.current?.play();
  }

  function pauseVideo() {
    playerRef.current?.pause();
  }

  function toggleControls() {
    if (playerRef.current?.controls) {
      playerRef.current.controls = !playerRef.current.controls;
    }
  }


  return (    
      <ReactHlsPlayer
        playerRef={playerRef}
        src={url}
        autoPlay={true}
        controls={true}
        width="45%"
        height="auto"
        muted={true}
      />
  )
}