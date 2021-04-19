/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrongComponent } from './trong.component';

describe('TrongComponent', () => {
  let component: TrongComponent;
  let fixture: ComponentFixture<TrongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
