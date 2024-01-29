import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqaatFloorsComponent } from './miqaat-floors.component';

describe('MiqaatFloorsComponent', () => {
  let component: MiqaatFloorsComponent;
  let fixture: ComponentFixture<MiqaatFloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqaatFloorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqaatFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
