/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoFormValidationsShorthandComponent } from './demo-form-validations-shorthand.component';

describe('DemoFormValidationsShorthandComponent', () => {
  let component: DemoFormValidationsShorthandComponent;
  let fixture: ComponentFixture<DemoFormValidationsShorthandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormValidationsShorthandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormValidationsShorthandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
