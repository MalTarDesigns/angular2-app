/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewPersonComponent } from './new-person.component';

describe('NewPersonComponent', () => {
  let component: NewPersonComponent;
  let fixture: ComponentFixture<NewPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
