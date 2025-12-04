import { Player } from "./player.js";
import { Deck } from "./deck.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export class Game {
    private deck: Deck;
    private playerHand: Player;
    private DealerHand: Player;
    private bankroll: number;
    constructor() {
        this.deck = new Deck();
        this.playerHand = new Player;
        this.DealerHand = new Player;
        this.bankroll = 100;
    }
    public play(): void {
        console.log("Welcome to BlackJack Card Game!!!!");
        while (this.bankroll > 0) {
            this.deck.reset();
            this.playerHand.clearCards();
            this.DealerHand.clearCards();
            console.log(`Player's funds:${this.bankroll}`);
            let plyrbet = parseInt(prompt("Enter your bet:"));
            if(plyrbet>this.bankroll){
                console.log(`Oops!! You have insufficient funds. Your balance is $${this.bankroll}`)
                continue;
            }
            if (!isNaN(plyrbet) && plyrbet > 0 && plyrbet <= this.bankroll) {
                this.playerHand.addCard(this.deck.deal());
                this.playerHand.addCard(this.deck.deal());
                this.DealerHand.addCard(this.deck.deal());
                this.DealerHand.addCard(this.deck.deal());
            }
            this.displayInHand(true);
            let val = this.playerHand.getScore();
            if (val == 21) {
                if (this.DealerHand.getScore() == 21) {
                    console.log("Both have BlackJack! Push.");
                }
                else {
                    console.log(`You win $${1.5 * plyrbet}! (3:2 payout for Blackjack)`);
                    this.bankroll += plyrbet * 1.5;
                }
            }
            else{
            this.makechoice(plyrbet);
            }
            console.log(`Player's fund:${this.bankroll}`);
            console.log('******************************************');
        }
    }
    public displayInHand(b: boolean): void {
        console.log("Your hand: ",this.playerHand.displayCards(false),"(Total:",this.playerHand.getScore(),")");
        console.log("Dealer's hand: ",this.DealerHand.displayCards(b));
    }
    public makechoice(plyrbet:number): void {
        while (this.playerHand.getScore() < 21) {
            let choice = prompt("Do you want to Hit or Stand? (H/S):").toLowerCase();
            if (choice === 'h') {
                this.playerHand.addCard(this.deck.deal());
                console.log("Your hand: ",this.playerHand.displayCards(false),"(Total:",this.playerHand.getScore(),")");
            }
            else if (choice === 's') {
                break;
            }
            else{
                console.log("Invalid Choice! Try again");
            }
        }
        console.log("Dealer's hand: ",this.DealerHand.displayCards(false),"(Total:",this.DealerHand.getScore(),")");
        if(this.playerHand.getScore()>21){
            console.log(`You bust and lose $${plyrbet}`)
            this.bankroll-=plyrbet;
            return;
        }
        while(this.DealerHand.getScore()<17){
            this.DealerHand.addCard(this.deck.deal());
            console.log("Dealer's Hits: ",this.DealerHand.displayCards(false),"(Total:",this.DealerHand.getScore(),`${this.DealerHand.getScore()>21?" - Dealer Busts":""}`,")");
            if(this.DealerHand.getScore()>21){
                console.log(`You win $${plyrbet}`);
                this.bankroll+=plyrbet;
                return;
            }
        }
        let plyrscore=this.playerHand.getScore();
        let dlrscore=this.DealerHand.getScore();
        if(plyrscore>dlrscore && plyrscore<=21  && dlrscore<=21){
            console.log(`You win $${plyrbet}`);
            this.bankroll+=plyrbet;
        }
        else if(this.playerHand.getScore()==this.DealerHand.getScore()){
            console.log("It's a push! Your bet is returned.");
        }
        else if(plyrscore<dlrscore && plyrscore<=21  && dlrscore<=21){
            console.log(`Dealer Wins.You lose $${plyrbet}`);
            this.bankroll-=plyrbet;
        }
    }
}