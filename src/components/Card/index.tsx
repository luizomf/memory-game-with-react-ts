import * as Styled from './styles';

export interface CardProps {
  frontChildren: React.ReactNode;
  backChildren: React.ReactNode;
  flipped: boolean;
  cardId?: string;
  handleClick?: (cardId: string) => void;
}

export const Card = ({
  frontChildren,
  backChildren,
  handleClick,
  flipped = false,
  cardId = '',
}: CardProps) => {
  return (
    <Styled.Container
      onClick={handleClick ? () => handleClick(cardId) : undefined}
    >
      <Styled.Inner flipped={flipped}>
        <Styled.Front>{frontChildren}</Styled.Front>
        <Styled.Back>{backChildren}</Styled.Back>
      </Styled.Inner>
    </Styled.Container>
  );
};
