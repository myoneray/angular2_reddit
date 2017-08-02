import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-validations-shorthand',
  templateUrl: './demo-form-validations-shorthand.component.html',
  styleUrls: ['./demo-form-validations-shorthand.component.css']
})
export class DemoFormValidationsShorthandComponent implements OnInit {

  //不用AbstractControl创建实例参数的写法
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required],
      'name': ['', Validators.required]
    });
  }


  // 创建实例参数的写法
  // myForm: FormGroup;
  // sku: AbstractControl;
  // name: AbstractControl;

  // constructor(fb: FormBuilder) {
  //   this.myForm = fb.group({
  //     'sku': ['', Validators.required],
  //     'name': ['', Validators.required]
  //   });
  //
  //   this.sku = this.myForm.controls['sku'];
  //   this.name = this.myForm.controls['name'];
  // }


  onSubmit(value: any): void {
    console.log('you submitted value:', value);
  }


  ngOnInit() {
  }

}
