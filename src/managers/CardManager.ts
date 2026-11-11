import { CardItem, CardValue } from '../types/game';

export const MASTER_DECK_CARDS: CardItem[] = [
  {
    id: 'card-1',
    value: 1,
    label: '1 LANGKAH',
    subtitle: 'Robot maju 1 petak antariksa',
    color: '#00F2FE',
  },
  {
    id: 'card-2',
    value: 2,
    label: '2 LANGKAH',
    subtitle: 'Robot maju 2 petak antariksa',
    color: '#38BDF8',
  },
  {
    id: 'card-3',
    value: 3,
    label: '3 LANGKAH',
    subtitle: 'Robot maju 3 petak antariksa',
    color: '#10B981',
  },
  {
    id: 'card-4',
    value: 4,
    label: '4 LANGKAH',
    subtitle: 'Robot maju 4 petak antariksa',
    color: '#A855F7',
  },
  {
    id: 'card-5',
    value: 5,
    label: '5 LANGKAH',
    subtitle: 'Robot maju 5 petak antariksa',
    color: '#F97316',
  },
  {
    id: 'card-6',
    value: 6,
    label: '6 LANGKAH',
    subtitle: 'Kecepatan penuh! Maju 6 petak',
    color: '#EC4899',
  },
  {
    id: 'card-star',
    value: 'STAR',
    label: 'KARTU BINTANG!',
    subtitle: 'Pilih 1 dari 3 Bonus Bintang Spesial!',
    color: '#F59E0B',
  },
  {
    id: 'card-zonk',
    value: 'ZONK',
    label: 'ZONK!',
    subtitle: 'Kesempatan bergerak terlewat!',
    color: '#F43F5E',
  },
];

export class CardManager {
  // The deck ALWAYS holds all 8 cards. A drawn card is never removed:
  // every draw shuffles the full stack, reveals the top card, and the card stays in the stack.
  private currentDeck: CardItem[] = [];

  constructor() {
    this.shuffleNewCycle();
  }

  // Fisher-Yates shuffle of the complete 8-card stack
  public shuffleNewCycle() {
    const copy = [...MASTER_DECK_CARDS];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    this.currentDeck = copy;
  }

  // Shuffle all 8 cards, show the top one, and keep it in the stack (deck size stays 8)
  public drawCard(): { card: CardItem; reshuffled: boolean } {
    this.shuffleNewCycle();
    const card = this.currentDeck[this.currentDeck.length - 1];
    return { card, reshuffled: false };
  }

  /**
   * Used when all 3 Star Bonuses of a player are exhausted (or Acak Kartu 1x is used with no bonus left).
   * A drawn Star is put back into the stack and the stack is shuffled and drawn again
   * until a number card or Zonk appears.
   */
  public drawGuaranteedNonStarCard(): { card: CardItem; reshuffled: boolean } {
    let result = this.drawCard();
    let attempts = 0;
    while (result.card.value === 'STAR' && attempts < 200) {
      result = this.drawCard();
      attempts++;
    }
    if (result.card.value === 'STAR') {
      // Safety net (practically unreachable): pick any non-Star card
      const fallback = this.currentDeck.find((c) => c.value !== 'STAR')!;
      return { card: fallback, reshuffled: false };
    }
    return result;
  }

  // The stack always contains all 8 cards
  public getRemainingCount(): number {
    return this.currentDeck.length;
  }

  public getRemainingValues(): CardValue[] {
    return this.currentDeck.map((c) => c.value);
  }
}
