import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainermasterComponent } from './trainermaster.component';

describe('TrainermasterComponent', () => {
  let component: TrainermasterComponent;
  let fixture: ComponentFixture<TrainermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainermasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
