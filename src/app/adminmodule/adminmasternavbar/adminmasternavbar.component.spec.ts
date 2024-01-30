import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmasternavbarComponent } from './adminmasternavbar.component';

describe('AdminmasternavbarComponent', () => {
  let component: AdminmasternavbarComponent;
  let fixture: ComponentFixture<AdminmasternavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmasternavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmasternavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
