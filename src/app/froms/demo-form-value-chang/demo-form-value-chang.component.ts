import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
@Component({
  selector: 'app-demo-form-value-chang',
  templateUrl: './demo-form-value-chang.component.html',
  styleUrls: ['./demo-form-value-chang.component.css']
})
export class DemoFormValueChangComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;
  name: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required],
      'name': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
    this.name = this.myForm.controls['name'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku 变成==> ', value);
      }
    );
    this.name.valueChanges.subscribe(
      (value: string) => {
        console.log('name 变成==> ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form 变成==> ', form);
      }
    );

  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  ngOnInit() {
  }

}
