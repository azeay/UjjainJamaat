import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqaatsComponent } from './miqaats.component';

describe('MiqaatsComponent', () => {
  let component: MiqaatsComponent;
  let fixture: ComponentFixture<MiqaatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqaatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqaatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
