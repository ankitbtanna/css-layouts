import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSaysComponent } from './sidebar-says.component';

describe('SidebarSaysComponent', () => {
  let component: SidebarSaysComponent;
  let fixture: ComponentFixture<SidebarSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
