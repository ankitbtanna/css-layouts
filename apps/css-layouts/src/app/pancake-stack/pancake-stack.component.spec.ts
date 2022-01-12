import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeStackComponent } from './pancake-stack.component';

describe('PancakeStackComponent', () => {
  let component: PancakeStackComponent;
  let fixture: ComponentFixture<PancakeStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PancakeStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PancakeStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
