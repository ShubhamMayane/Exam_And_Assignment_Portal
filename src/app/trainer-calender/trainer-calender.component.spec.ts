import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCalenderComponent } from './trainer-calender.component';

describe('TrainerCalenderComponent', () => {
  let component: TrainerCalenderComponent;
  let fixture: ComponentFixture<TrainerCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
