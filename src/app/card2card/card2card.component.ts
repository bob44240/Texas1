import { Component, Input } from '@angular/core';
const imageDir = '/assets/card-faces';

const pips: Record<string, string> = {
  clubs:    '\u2663',
  diamonds: '\u2666',
  hearts:   '\u2665',
  spades:   '\u2660',
};

/* tslint:disable object-literal-key-quotes */
const rankToNumberOfPips: Record<string, number> = {
  'A' :  1,
  '2' :  2,
  '3' :  3,
  '4' :  4,
  '5' :  5,
  '6' :  6,
  '7' :  7,
  '8' :  8,
  '9' :  9,
  '10': 10,
  'J' :  0,
  'Q' :  0,
  'K' :  0,
};

@Component({
  selector: 'app-card2card',
  templateUrl: './card2card.component.html',
  styleUrls: ['./card2card.component.scss']
})
export class Card2cardComponent {

  @Input() suit = '';
  @Input() rank = '';

  pip = '';
  designPips: string[] = [];
  cardImageUrl = '';

  ngOnInit() {
    const numPips: number = rankToNumberOfPips[this.rank];

    this.pip = pips[this.suit];

    if (numPips > 0) {
      this.designPips = Array(numPips).fill(this.pip);
    } else {
      this.cardImageUrl = imageDir + '/' + this.rank + '-' + this.suit + '.png';
    }
  }

}
