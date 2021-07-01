import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKePageComponent } from './thong-ke-page.component';

describe('ThongKePageComponent', () => {
  let component: ThongKePageComponent;
  let fixture: ComponentFixture<ThongKePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongKePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
