import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqaatGroupDetailsComponent } from './miqaat-group-details.component';

describe('MiqaatGroupDetailsComponent', () => {
  let component: MiqaatGroupDetailsComponent;
  let fixture: ComponentFixture<MiqaatGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqaatGroupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqaatGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
