import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulemasterComponent } from './modulemaster.component';

describe('ModulemasterComponent', () => {
  let component: ModulemasterComponent;
  let fixture: ComponentFixture<ModulemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
