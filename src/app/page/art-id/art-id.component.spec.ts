/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtIdComponent } from './art-id.component';

describe('ArtIdComponent', () => {
  let component: ArtIdComponent;
  let fixture: ComponentFixture<ArtIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
