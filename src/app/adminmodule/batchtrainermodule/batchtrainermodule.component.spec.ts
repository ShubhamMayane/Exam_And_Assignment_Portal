import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchtrainermoduleComponent } from './batchtrainermodule.component';

describe('BatchtrainermoduleComponent', () => {
  let component: BatchtrainermoduleComponent;
  let fixture: ComponentFixture<BatchtrainermoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchtrainermoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchtrainermoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
