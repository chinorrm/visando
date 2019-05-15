import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDropdownlistComponent } from './control-dropdownlist.component';

describe('ControlDropdownlistComponent', () => {
  let component: ControlDropdownlistComponent;
  let fixture: ComponentFixture<ControlDropdownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDropdownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
