import {Suit,Rank} from './types.js';
export class Card{
    constructor(public readonly suit:Suit,public readonly rank:Rank){}
    get value():number{
        if(['J','K','Q'].includes(this.rank))return 10;
        else if(this.rank=='A')return 11;
        else return parseInt(this.rank);
    }
    printcard():string{
        return `${this.rank}${this.suit}`;
    }
}