import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctrongComponent } from './ductrong.component';

describe('DuctrongComponent', () => {
  let component: DuctrongComponent;
  let fixture: ComponentFixture<DuctrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuctrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuctrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
