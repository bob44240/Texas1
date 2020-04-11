import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  //&input hand
  @Input("hand") hand;

  public cardImage1 = "assets/CardImages/AS.jpg"
  public cardImage2 = "assets/CardImages/KS.jpg"

  constructor() { }

  ngOnInit(): void {
  console.log(this.hand)
  }

}
