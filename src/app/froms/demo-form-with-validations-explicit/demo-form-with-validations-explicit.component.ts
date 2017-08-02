import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';


@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html',
  styleUrls: ['./demo-form-with-validations-explicit.component.css']
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {

  ngOnInit() {
  }

  myForm: FormGroup;
  sku: AbstractControl;
  name: AbstractControl;
  address: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required],
      'name': ['', Validators.required],
      'address': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
    this.name = this.myForm.controls['name'];
    this.address = this.myForm.controls['address'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
