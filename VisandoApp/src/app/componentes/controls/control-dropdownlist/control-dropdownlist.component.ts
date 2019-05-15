import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-control-dropdownlist',
  templateUrl: './control-dropdownlist.component.html',
  styleUrls: ['./control-dropdownlist.component.css']
})
export class ControlDropdownlistComponent implements OnInit {

  @Input() public control : FormControl = new FormControl('');
  /**
   * to recibe a text to show on label coming from component.
   */
  @Input() public label : string = "";
  /**
   * To recibe a controlName from component.
   */
  @Input() public controlName : string = "";
  /**
   * To recibe a text to show on textfield coming from component.
   */
  @Input() public textField: string ="";
  /**
   * To recibe a value to assing a valuefield control from component
   */
  @Input() public valueField: string ="";
  /**
   * To recibe a value to assing a valueprimitive control coming from component.
   */
  @Input() public valuePrimitive: boolean =false;
  /**
   * To recibe object to defaulitem coming from component.
   */
  @Input() public defaultItem = {};
//   @Input() public functionValueChange : Function = function($event){};
/**
 * To recibe text to show in validation control.
 */
@Input() public helptext: string = '';
/**
 * to recibe a property disable to make enable or disable a control.
 */
  @Input() public disabled: boolean = false;
  /**
   * to emitter event when value change to component.
   */
  @Output() public eventValueChange = new EventEmitter();
  private options : string[] = [];
  constructor() { }

   // initialize a private variable _data, it's a BehaviorSubject
   private _data = new BehaviorSubject<string[]>([]);
/**
 * change data to use getter and setter
 */
   @Input()
   set data(value) {
       // set the latest value for _data BehaviorSubject
       this._data.next(value);
   };
 
   get data() {
       // get the latest value from _data BehaviorSubject
       return this._data.getValue();
   }
 
   ngOnInit() {
     this._data
             .subscribe(x => {
                 this.options = this.data;
             });
   }

   ngOnDestroy(){
       this._data.unsubscribe();
       this.eventValueChange.unsubscribe();
   }

   private functionValueChange($event){
       this.eventValueChange.emit(this.options.find(x => x[this.valueField] === $event));
   };

}
