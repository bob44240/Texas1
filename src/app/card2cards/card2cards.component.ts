import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2cards',
  templateUrl: './card2cards.component.html',
  styleUrls: ['./card2cards.component.scss']
})
export class Card2cardsComponent  {

  static label = 'Playing With a Full Deck';

  suits: string[] = [
    'spades',
    'hearts',
    'clubs',
    'diamonds',
  ];

  ranks: string[] =
    [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

}
