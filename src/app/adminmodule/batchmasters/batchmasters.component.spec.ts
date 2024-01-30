import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchmastersComponent } from './batchmasters.component';

describe('BatchmastersComponent', () => {
  let component: BatchmastersComponent;
  let fixture: ComponentFixture<BatchmastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchmastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
