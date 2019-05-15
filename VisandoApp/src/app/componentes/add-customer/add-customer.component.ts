import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  ClientForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ClientForm = this.fb.group({
      appointmentDate: [''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });
  }

}
