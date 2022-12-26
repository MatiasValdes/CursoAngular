import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGotComponent } from './card-got.component';

describe('CardGotComponent', () => {
  let component: CardGotComponent;
  let fixture: ComponentFixture<CardGotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
