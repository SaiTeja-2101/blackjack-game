import { Card } from './card.js';
import { Suit, Rank } from './types.js';
export class Deck {
    cards = [];
    constructor() {
        this.reset();
    }
    reset() {
        for (const suit of Object.values(Suit)) {
            for (const rank of Object.values(Rank)) {
                this.cards.push(new Card(suit, rank));
            }
        }
        this.shuffleArray();
    }
    shuffleArray() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            // Generate a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements at indices i and j
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal() {
        if (this.cards.length == 0)
            throw new Error("Cards are Empty");
        return this.cards.pop();
    }
}
//# sourceMappingURL=deck.js.map