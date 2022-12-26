import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaisComponent } from './card-pais.component';

describe('CardPaisComponent', () => {
  let component: CardPaisComponent;
  let fixture: ComponentFixture<CardPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
