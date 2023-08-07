import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NangcapComponent } from './nangcap.component';

describe('NangcapComponent', () => {
  let component: NangcapComponent;
  let fixture: ComponentFixture<NangcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NangcapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NangcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
