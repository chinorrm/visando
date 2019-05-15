import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GlobalsMethodsService {

  constructor() { }
}

export function ParseToNgDate(strDate: string): NgbDate {
  let momentDate = moment(strDate);

  return new NgbDate(momentDate.year(), momentDate.month() + 1, momentDate.date());
  // let date = moment(strDate);
  // return new NgbDate(date.year(), date.month(), date.day());
}
