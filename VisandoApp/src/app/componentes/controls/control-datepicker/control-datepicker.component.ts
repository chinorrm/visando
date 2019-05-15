import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ParseToNgDate } from '../../../services/globals-methods.service';

@Component({
  selector: 'app-control-datepicker',
  templateUrl: './control-datepicker.component.html',
  styleUrls: ['./control-datepicker.component.css']
})
export class ControlDatepickerComponent implements OnInit {

  @Input() public control: FormControl = new FormControl('');
  /**
   * To recibe text to show on label coming from component.
   */
  @Input() public label: string = "";
  /**
   * To recibe text to control name coming from component.
   */
  @Input() public controlName: string;
  /**
   * to recibe a property disable to make enable or disable a control.
   */
  @Input() public disabled: boolean = false;
  /**
   * To recibe a property readonly to make readonly the control.
   */
  @Input() public readonly: boolean = false;
  /**
   * To recibe a property focused on control coming from component.
   */
  @Input() public focusedDate: string = '';
  /**
   * To recibe a text with the placeholder to show on control coming from component.
   */
  @Input() public placeholder: string = '';
  /**
   * To recibe a text to show when validate control.
   */
  @Input() public helptext: string = "";
  /**
   * To recibe the property mindate coming from component by default value has a '2016-01-01'
   */
  @Input() public mindate: NgbDate = ParseToNgDate('2016-01-01');
  // @Input() public maxdate: NgbDate = ParseToNgDate(new Date().toString());
  // @Input() public mindate: NgbDate = ParseToNgDate(new Date().toString());
  constructor() { }

  ngOnInit() {
  }
/**
 * onDateSelected
 * @param $event Pramenter event
 */
  public onDateSelect($event) {
  }

}
