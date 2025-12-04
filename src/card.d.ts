import { Suit, Rank } from './types.js';
export declare class Card {
    readonly suit: Suit;
    readonly rank: Rank;
    constructor(suit: Suit, rank: Rank);
    get value(): number;
    printcard(): string;
}
//# sourceMappingURL=card.d.ts.map