import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatAutoMinmaxComponent } from './repeat-auto-minmax.component';

describe('RepeatAutoMinmaxComponent', () => {
  let component: RepeatAutoMinmaxComponent;
  let fixture: ComponentFixture<RepeatAutoMinmaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatAutoMinmaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatAutoMinmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
