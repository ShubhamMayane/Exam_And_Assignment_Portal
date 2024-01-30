import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuletopicmasterComponent } from './moduletopicmaster.component';

describe('ModuletopicmasterComponent', () => {
  let component: ModuletopicmasterComponent;
  let fixture: ComponentFixture<ModuletopicmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuletopicmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuletopicmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
