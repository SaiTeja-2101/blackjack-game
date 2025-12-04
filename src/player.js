import { Card } from './card.js';
import { Rank } from './types.js';
export class Player {
    currentCards = [];
    addCard(card) {
        this.currentCards.push(card);
    }
    getScore() {
        let val = 0;
        let acecount = 0;
        for (const card of this.currentCards) {
            val += card.value;
            if (card.rank == 'A')
                acecount++;
        }
        if (val > 21 && acecount > 0) {
            val -= 10;
            acecount--;
        }
        return val;
    }
    clearCards() {
        this.currentCards = [];
    }
    displayCards(b) {
        if (b) {
            return this.currentCards[0].printcard() + ", [Hidden]";
        }
        else {
            return this.currentCards.map(c => c.printcard()).join(', ');
        }
    }
}
//# sourceMappingURL=player.js.map