import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqaatDetailsComponent } from './miqaat-details.component';

describe('MiqaatDetailsComponent', () => {
  let component: MiqaatDetailsComponent;
  let fixture: ComponentFixture<MiqaatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqaatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqaatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
