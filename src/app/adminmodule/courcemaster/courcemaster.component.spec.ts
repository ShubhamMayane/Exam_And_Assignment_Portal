import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcemasterComponent } from './courcemaster.component';

describe('CourcemasterComponent', () => {
  let component: CourcemasterComponent;
  let fixture: ComponentFixture<CourcemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourcemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourcemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
