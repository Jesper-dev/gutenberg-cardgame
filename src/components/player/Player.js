import React, { useState } from "react";
import CharacterCard from "../card/CharacterCard";
import SpellCard from "../card/SpellCard";
import {
  PlayerFiledContainer,
  CardContainer,
  GoldStatus,
  PlayCardButton,
  LeftToolBarContainer,
} from "./PlayerElements";

import jesper from "../../Img/jesper.jpg";
import jon from "../../Img/jon.jpg";
import tinymce from "../../Img/tinymce.jpg";

const Player = ({ playercards, onPlayCard, hp }) => {
  const [highlight, setHighlight] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedvalue, setSelectedValue] = useState(null);
  const [gold, setGold] = useState(200);

  const onCardClick = (e) => {
    setHighlight(!highlight);
  };

  return (
    <>
      {/* <PlayerFiledContainer>
        <LeftToolBarContainer>
          <GoldStatus>Gold: {gold}</GoldStatus>
          <PlayCardButton onClick={onPlayCard}>
            Play Selected Card!
          </PlayCardButton>
        </LeftToolBarContainer>
      </PlayerFiledContainer> */}
    </>
  );
};

export default Player;
