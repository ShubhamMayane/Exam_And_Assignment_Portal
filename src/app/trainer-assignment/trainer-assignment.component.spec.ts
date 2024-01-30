import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAssignmentComponent } from './trainer-assignment.component';

describe('TrainerAssignmentComponent', () => {
  let component: TrainerAssignmentComponent;
  let fixture: ComponentFixture<TrainerAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
