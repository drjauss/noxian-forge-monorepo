import { Card } from './card.model';

export interface Deck {
  name?: string;
  description?: string;
  code?: string;
  playstyle?: string;
  cards: Array<Card>;
}
