import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
  autoTicks = true;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 5;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 10;
  @Output() deal = new EventEmitter<boolean>();
  getSliderTickInterval(): number | 'auto' {
    // if (this.showTicks) {
    //   return this.autoTicks ? 'auto' : this.tickInterval;
    // }

    return 0;
  }
  constructor() { }
dealCards() {
  console.log("Deal!");
  this.deal.emit();  //Send deal event
}
  ngOnInit(): void {
  }

}
