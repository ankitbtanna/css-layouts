import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveSpanGridComponent } from './twelve-span-grid.component';

describe('TwelveSpanGridComponent', () => {
  let component: TwelveSpanGridComponent;
  let fixture: ComponentFixture<TwelveSpanGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelveSpanGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelveSpanGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
