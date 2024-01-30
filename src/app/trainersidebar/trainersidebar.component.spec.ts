import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersidebarComponent } from './trainersidebar.component';

describe('TrainersidebarComponent', () => {
  let component: TrainersidebarComponent;
  let fixture: ComponentFixture<TrainersidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainersidebarComponent]
    });
    fixture = TestBed.createComponent(TrainersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
