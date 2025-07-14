import { useState } from "react";
import axios from "axios";

/**
 * Custom hook to manage the flip state of a card.
 * Returns [isFlipped, toggleFlip].
 */
function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleFlip = () => {
    setIsFlipped((flipped) => !flipped);
  };

  return [isFlipped, toggleFlip];
}

/** Custom hook for fetching data from an API and accumulating the results. */
function useAxios(baseUrl) {
  const [responses, setResponses] = useState([]);

  const addData = async (restUrl = "") => {
    const response = await axios.get(`${baseUrl}${restUrl}`);
    setResponses(data => [...data, response.data]);
  };

  return [responses, addData];
}

export { useFlip, useAxios };