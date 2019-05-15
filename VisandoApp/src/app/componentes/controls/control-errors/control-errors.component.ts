import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.css']
})
export class ControlErrorsComponent implements OnInit {

  @Input() public control: AbstractControl ;
  hasError = false;
  
    constructor() { }
  
    ngOnChanges(changes: SimpleChanges) { }
    ngOnInit() {
      this.control.statusChanges.subscribe(() => {
        this.hasError = this.control.invalid && (this.control.dirty || this.control.touched);
      });
    }

}
