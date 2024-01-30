import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmasterComponent } from './studentmaster.component';

describe('StudentmasterComponent', () => {
  let component: StudentmasterComponent;
  let fixture: ComponentFixture<StudentmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
