import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableServicesUpdateComponent } from './available-services-update.component';

describe('AvailableServicesUpdateComponent', () => {
  let component: AvailableServicesUpdateComponent;
  let fixture: ComponentFixture<AvailableServicesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableServicesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableServicesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
