import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanhoiComponent } from './phanhoi.component';

describe('PhanhoiComponent', () => {
  let component: PhanhoiComponent;
  let fixture: ComponentFixture<PhanhoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanhoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
