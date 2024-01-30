import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchmatesComponent } from './batchmates.component';

describe('BatchmatesComponent', () => {
  let component: BatchmatesComponent;
  let fixture: ComponentFixture<BatchmatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchmatesComponent]
    });
    fixture = TestBed.createComponent(BatchmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
