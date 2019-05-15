import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDatepickerComponent } from './control-datepicker.component';

describe('ControlDatepickerComponent', () => {
  let component: ControlDatepickerComponent;
  let fixture: ComponentFixture<ControlDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
