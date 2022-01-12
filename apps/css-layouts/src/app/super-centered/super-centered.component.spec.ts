import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCenteredComponent } from './super-centered.component';

describe('SuperCenteredComponent', () => {
  let component: SuperCenteredComponent;
  let fixture: ComponentFixture<SuperCenteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCenteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
