import { useState } from "react";

/**
 * Custom hook to manage the flip state of a card.
 * Returns [isFlipped, toggleFlip].
 */
function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);

  const toggleFlip = () => {
    setIsFlipped(flipped => !flipped);
  };

  return [isFlipped, toggleFlip];
}

export { useFlip };
