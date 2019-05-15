import { Component, OnInit, SimpleChanges, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-input',
  templateUrl: './control-input.component.html',
  styleUrls: ['./control-input.component.css']
})
export class ControlInputComponent implements OnInit {
  @Input() public control : FormControl = new FormControl('');
  /**
   * To recibe a new label to input control from component.
   */
  @Input() public label : string = "";
  /**
   * To recibe a new control name from component.
   */
  @Input() public controlName : string = "";
  /**
   * To recibe the type of contol from component.
   */
  @Input() public type : string = 'text';
  /**
   * To recibe a disable property to be able or disable control from component.
   */
  @Input() public disabled: boolean = false;
  /**
   * To recibe a text with the placeholder to control.
   */
  @Input() public placeholder: string = '';
  /**
   * To recibe a readonly property to make a control readonly.
   */
  @Input() public readonly: boolean = false;
  /**
   * To recibe a text in validation control from component.
   */
  @Input() public helptext: string = "";
  /**
   * To recibe the max property from component.
   */
  @Input() public max: number = 922337203685477.58;
  /**
   * To emitter when the mouse leave control.
   */
  @Output() public onBlur = new EventEmitter();
  /**
   * To emitter when the key is pressed.
   */
  @Output() public onKeyDown = new EventEmitter();

  constructor() { }

banderaIE = false;
  ngOnChanges(changes: SimpleChanges) {
   this.banderaIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
  }

  ngOnInit() {
    if (navigator.userAgent.search('MSIE') === 0) {
    }
  }
/**
 * Function to emiter when the moue leave the control.
 * @param $event Parameter with the event of control.
 */
  blurEvent($event): void {
    this.onBlur.emit($event);
  }
/**
 * Function to emitter when the key is pressed.
 * @param $event Parameter with the event of control.
 */
  keyDownEvent($event) {
    this.onKeyDown.emit($event);
  }

}
