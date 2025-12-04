import { Suit, Rank } from './types.js';
export class Card {
    suit;
    rank;
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    get value() {
        if (['J', 'K', 'Q'].includes(this.rank))
            return 10;
        else if (this.rank == 'A')
            return 11;
        else
            return parseInt(this.rank);
    }
    printcard() {
        return `${this.rank}${this.suit}`;
    }
}
//# sourceMappingURL=card.js.map