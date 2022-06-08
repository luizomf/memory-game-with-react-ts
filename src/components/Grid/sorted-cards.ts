import { CardProps } from '../Card';
import { cardsProps } from './props';

export const sortedCards = (): CardProps[] => {
  return JSON.parse(JSON.stringify(cardsProps)).sort(() => Math.random() - 0.5);
};
