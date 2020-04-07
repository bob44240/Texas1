import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  //&input hand
  @Input("hand") hand;

  public imagePath = "assets/CardImages/honor_heart-14.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
