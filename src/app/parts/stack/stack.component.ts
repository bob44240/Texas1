import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  @Input("hand") hand;

  public stackImage1 = "assets/CardImages/stack.jpeg"

  constructor() { }

  ngOnInit(): void {
  }

}
