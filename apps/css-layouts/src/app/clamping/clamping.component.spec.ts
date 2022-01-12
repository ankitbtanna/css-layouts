import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClampingComponent } from './clamping.component';

describe('ClampingComponent', () => {
  let component: ClampingComponent;
  let fixture: ComponentFixture<ClampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClampingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
