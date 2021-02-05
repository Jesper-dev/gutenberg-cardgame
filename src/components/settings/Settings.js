import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { SettingsCanvas, VolumeBtn, MusicBtn, BtnLabel } from "./SettingsElements";

const Settings = ({ adjustVolume, play, stop, active }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const StopPlayMusic = () => {
    if(isPlaying){
      stop()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    }
   
  }

  return (
    <>
      <SettingsCanvas>
        <BtnLabel>Music</BtnLabel>
        <br />
        <VolumeBtn id="volume-plus" onClick={(e) => adjustVolume(e)}> + </VolumeBtn>
        <VolumeBtn id="volume-minus" onClick={(e) => adjustVolume(e)}> - </VolumeBtn>
        <br />
        <BtnLabel>SFX</BtnLabel>
        <br />
        <VolumeBtn id="sfx-plus" onClick={(e) => adjustVolume(e)}> + </VolumeBtn>
        <VolumeBtn id="sfx-minus" onClick={(e) => adjustVolume(e)}> - </VolumeBtn>
        <br />
        <MusicBtn onClick={StopPlayMusic} active={active}>{!isPlaying ? 'Play Music' : 'Stop Music'}</MusicBtn>
      </SettingsCanvas>
    </>
  );
};

export default Settings;
