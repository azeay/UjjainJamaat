import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatReservationsComponent } from './seat-reservations.component';

describe('SeatReservationsComponent', () => {
  let component: SeatReservationsComponent;
  let fixture: ComponentFixture<SeatReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
