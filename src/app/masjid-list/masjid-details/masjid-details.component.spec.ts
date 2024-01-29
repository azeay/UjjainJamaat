import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasjidDetailsComponent } from './masjid-details.component';

describe('MasjidDetailsComponent', () => {
  let component: MasjidDetailsComponent;
  let fixture: ComponentFixture<MasjidDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasjidDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasjidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
