import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceDriverDetailsComponent } from './ambulance-driver-details.component';

describe('AmbulanceDriverDetailsComponent', () => {
  let component: AmbulanceDriverDetailsComponent;
  let fixture: ComponentFixture<AmbulanceDriverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulanceDriverDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulanceDriverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
