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

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit, AfterViewInit {

  private deck:number[];
  private deck2: string[];
  @ViewChildren(HandComponent) handViewChildren: QueryList<HandComponent>;
  constructor() {}

  ngOnInit(): void { }

  shuffle(){
    let max = 51;
    let min = 0;
    let addIndex = 0;
    let newCard = 0;
    let tempDeck = new Array(52);
    this.deck = new Array(52);
    this.deck2 = new Array(52);
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
        console.log(newCard, this.getName(newCard));
        tempDeck.splice(r,1)
        max--;
        // count++;
        // if (count >100) break;
      }
      console.log(this.deck)

      // this.deck.forEach((val,index)=>{
      //   console.log(this.getName(val))
      // });
  }
  click() {
    this.shuffle()
    //console.log(this.deck)
  }
  getName(cardNumber) : string {

    let cardRank = cardNumber % 13;

    let cardSuit = Math.floor(cardNumber/13);

    console.log(cardNumber, cardSuit, cardRank)
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suit = ['S', 'H', 'D', 'C']

    return rank[cardRank] + suit[cardSuit];
  }

  ngAfterViewInit() {
console.log(this.handViewChildren)

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
}
