import { Card, CardProps } from '../Card';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { sortedCards } from './sorted-cards';

export const Grid = () => {
  const [stateCards, setStateCards] = useState(sortedCards);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const firstClickedCard = useRef<CardProps | null>(null);
  const secondClickedCard = useRef<CardProps | null>(null);
  const twoFlippedCardsWrong = useRef(false);

  useEffect(() => {
    // To win, all cards must be flipped
    const finished = stateCards.every((c) => c.flipped === true);

    if (finished) {
      const reset = confirm(
        `You won with ${moves} moves and ${matches} matches. Click 'Ok' to start again!`,
      );

      if (reset) {
        handleReset();
      }
    }
  }, [stateCards]);

  const handleReset = () => {
    setMatches(0);
    setMoves(0);
    setStateCards(sortedCards);
    firstClickedCard.current = null;
    secondClickedCard.current = null;
    twoFlippedCardsWrong.current = false;
  };

  const handleClick = (cardId: string) => {
    // Maps the cards array
    const newStateCards = stateCards.map((clickedCard) => {
      // The card is not the one the user clicked
      if (clickedCard.cardId !== cardId) return clickedCard;

      // The card is already flipped
      if (clickedCard.flipped) return clickedCard;

      // Resets wrong cards
      if (twoFlippedCardsWrong.current === true) {
        if (firstClickedCard.current !== null) {
          firstClickedCard.current.flipped = false;
        }

        if (secondClickedCard.current !== null) {
          secondClickedCard.current.flipped = false;
        }

        firstClickedCard.current = null;
        secondClickedCard.current = null;
        twoFlippedCardsWrong.current = false;
      }

      // Flip the card
      clickedCard.flipped = true;

      // Swap the state clicked card with the ref first or second card.
      // Now, everything done in the ref card will affect the state.
      if (firstClickedCard.current === null) {
        // First card clicked
        firstClickedCard.current = clickedCard;
        clickedCard = firstClickedCard.current;
      } else if (secondClickedCard.current === null) {
        // Second card clicked
        secondClickedCard.current = clickedCard;
        clickedCard = secondClickedCard.current;
      }

      // For a match, the two flipped cards back must be the same
      if (
        firstClickedCard.current !== null &&
        secondClickedCard.current !== null &&
        firstClickedCard.current.backChildren ===
          secondClickedCard.current.backChildren
      ) {
        setMatches((matches) => matches + 1);
        firstClickedCard.current = null;
        secondClickedCard.current = null;
      }

      // To compute a fail, the two flipped cards back are different
      if (
        firstClickedCard.current !== null &&
        secondClickedCard.current !== null &&
        firstClickedCard.current.backChildren !==
          secondClickedCard.current.backChildren
      ) {
        twoFlippedCardsWrong.current = true;
      }

      // Every interaction is a move
      setMoves((moves) => moves + 1);

      return clickedCard;
    });

    setStateCards(newStateCards);
  };

  return (
    <Styled.Container>
      <Styled.Title>A React TS Memory Game</Styled.Title>
      <Styled.Text>
        Matches {matches} | Moves {moves}
        <Styled.Reset onClick={handleReset}>Reset</Styled.Reset>
      </Styled.Text>
      <Styled.Grid>
        {stateCards.map((card) => {
          return (
            <Card
              key={card.cardId}
              cardId={card.cardId}
              frontChildren={card.frontChildren}
              backChildren={card.backChildren}
              flipped={card.flipped}
              handleClick={handleClick}
            />
          );
        })}
      </Styled.Grid>
    </Styled.Container>
  );
};
