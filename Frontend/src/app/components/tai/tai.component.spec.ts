import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiComponent } from './tai.component';

describe('TaiComponent', () => {
  let component: TaiComponent;
  let fixture: ComponentFixture<TaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
