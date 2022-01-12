import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDeconstructedPancakeComponent } from './the-deconstructed-pancake.component';

describe('TheDeconstructedPancakeComponent', () => {
  let component: TheDeconstructedPancakeComponent;
  let fixture: ComponentFixture<TheDeconstructedPancakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDeconstructedPancakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDeconstructedPancakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
