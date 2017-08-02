/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgNonBindableComponent } from './ng-non-bindable.component';

describe('NgNonBindableComponent', () => {
  let component: NgNonBindableComponent;
  let fixture: ComponentFixture<NgNonBindableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNonBindableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNonBindableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
