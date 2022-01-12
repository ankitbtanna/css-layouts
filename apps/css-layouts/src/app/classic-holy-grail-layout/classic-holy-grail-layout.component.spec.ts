import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicHolyGrailLayoutComponent } from './classic-holy-grail-layout.component';

describe('ClassicHolyGrailLayoutComponent', () => {
  let component: ClassicHolyGrailLayoutComponent;
  let fixture: ComponentFixture<ClassicHolyGrailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicHolyGrailLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicHolyGrailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
