import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqaatFloorDetailsComponent } from './miqaat-floor-details.component';

describe('MiqaatFloorDetailsComponent', () => {
  let component: MiqaatFloorDetailsComponent;
  let fixture: ComponentFixture<MiqaatFloorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqaatFloorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqaatFloorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
