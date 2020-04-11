import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flop',
  templateUrl: './flop.component.html',
  styleUrls: ['./flop.component.scss']
})
export class FlopComponent implements OnInit {

  @Input("hand") hand;

  public cardImage1 = "assets/CardImages/AS.jpg"
  public cardImage2 = "assets/CardImages/KS.jpg"
  public cardImage3 = "assets/CardImages/AS.jpg"
  public cardImage4 = "assets/CardImages/KS.jpg"
  public cardImage5 = "assets/CardImages/AS.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
