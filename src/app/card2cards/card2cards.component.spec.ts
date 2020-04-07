import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2cardsComponent } from './card2cards.component';

describe('Card2cardsComponent', () => {
  let component: Card2cardsComponent;
  let fixture: ComponentFixture<Card2cardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card2cardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card2cardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
