import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */

// renamed from CardTable to match file name and purpose of the function.
function PlayingCardList() {
  const [cards, addCardResponse] = useAxios(
      "https://deckofcardsapi.com/api/deck/new/draw/"
    );
  const addCard = async () => {
    await addCardResponse();
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
