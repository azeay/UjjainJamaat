import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqaatGroupsComponent } from './miqaat-groups.component';

describe('MiqaatGroupsComponent', () => {
  let component: MiqaatGroupsComponent;
  let fixture: ComponentFixture<MiqaatGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqaatGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqaatGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
