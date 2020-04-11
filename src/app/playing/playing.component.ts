import { Component,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ViewChildren,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  OnInit } from '@angular/core';
  import {HandComponent} from '../parts/hand/hand.component'
  import {FlopComponent} from '../parts/flop/flop.component'
  import {Hand} from "../hand";

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit, AfterViewInit {

  private deck:number[];
  private deck2: string[];
  private hands;
  @ViewChildren(HandComponent) handViewChildren: QueryList<HandComponent>;
  @ViewChild(FlopComponent) flopComponent: FlopComponent;
  constructor() {}

  ngOnInit(): void { }

  shuffle(){
    let max = 51;
    let min = 0;
    let addIndex = 0;
    let newCard = 0;
    let tempDeck = new Array(52);
    this.deck = new Array(52);
   // this.deck2 = new Array(52);
      for (let i = 0; i<52; i++) {
          tempDeck[i] = i;
          this.deck[i] = -999;
      }
      let count = 0;
      this.deck = new Array(52);
      while (tempDeck.length>0) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        newCard = tempDeck[r];
        this.deck[addIndex++] = newCard;
        tempDeck.splice(r,1)
        max--;
      }
  }
  click() {
    this.shuffle()
    console.log(this.deck)
  }
  onDeal(){
    this.shuffle();
    let card = this.getName(this.deck[0]);

    let index = 0;
    let nextCard = "";
    this.hands.forEach((hand)=>{

        nextCard=this.getName(this.deck[index++])
        hand.cardImage1 = "assets/CardImages/"+nextCard+".jpg";
        nextCard=this.getName(this.deck[index++])
        hand.cardImage2 = "assets/CardImages/"+nextCard+".jpg";

    });

    nextCard=this.getName(this.deck[index++])
    this.flopComponent.cardImage1 = "assets/CardImages/"+nextCard+".jpg";
    nextCard=this.getName(this.deck[index++])
    this.flopComponent.cardImage2 = "assets/CardImages/"+nextCard+".jpg";
    nextCard=this.getName(this.deck[index++])
    this.flopComponent.cardImage3 = "assets/CardImages/"+nextCard+".jpg";
    nextCard=this.getName(this.deck[index++])
    this.flopComponent.cardImage4 = "assets/CardImages/"+nextCard+".jpg";
    nextCard=this.getName(this.deck[index++])
    this.flopComponent.cardImage5 = "assets/CardImages/"+nextCard+".jpg";

    //console.log(this.hands[3].cardImage1,card);
    //this.hands[3].cardImage1 = "assets/CardImages/"+card+".jpg";
  }
  getName(cardNumber) : string {

    let cardRank = cardNumber % 13;

    let cardSuit = Math.floor(cardNumber/13);

    //console.log(cardNumber, cardSuit, cardRank)
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suit = ['S', 'H', 'D', 'C']

    return rank[cardRank] + suit[cardSuit];
  }

  ngAfterViewInit() {
// this.getSubscribedHands();
// this.handViewChildren.changes.subscribe((hand)=> {
// this.getSubscribedHands();
// });

this.hands=this.handViewChildren.toArray();
console.log(this.hands[3]);
this.onDeal();

// this.handViewChildren.changes.subscribe((r) => {
//   console.log(r);
// });
  }
  getRandomCard () : string {
    let max = 12;
    let min = 0
    let suit = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    //let seed = this.time.getMilliseconds();

     let r = Math.floor(Math.random() * (max - min + 1)) + min;
     console.log( r);


    return ;
  }

  getSubscribedHands() {
    setTimeout(() => { this.handViewChildren.map(p => console.log(p)); }, 0);
  }
}
