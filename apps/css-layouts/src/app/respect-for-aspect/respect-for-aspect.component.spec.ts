import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectForAspectComponent } from './respect-for-aspect.component';

describe('RespectForAspectComponent', () => {
  let component: RespectForAspectComponent;
  let fixture: ComponentFixture<RespectForAspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectForAspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespectForAspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
