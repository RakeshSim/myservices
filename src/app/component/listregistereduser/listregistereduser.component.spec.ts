import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregistereduserComponent } from './listregistereduser.component';

describe('ListregistereduserComponent', () => {
  let component: ListregistereduserComponent;
  let fixture: ComponentFixture<ListregistereduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListregistereduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListregistereduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
