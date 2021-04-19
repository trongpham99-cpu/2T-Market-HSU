import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrongtestComponent } from './trongtest.component';

describe('TrongtestComponent', () => {
  let component: TrongtestComponent;
  let fixture: ComponentFixture<TrongtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrongtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrongtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
