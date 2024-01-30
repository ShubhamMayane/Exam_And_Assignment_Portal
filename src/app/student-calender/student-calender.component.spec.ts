import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCalenderComponent } from './student-calender.component';

describe('StudentCalenderComponent', () => {
  let component: StudentCalenderComponent;
  let fixture: ComponentFixture<StudentCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
