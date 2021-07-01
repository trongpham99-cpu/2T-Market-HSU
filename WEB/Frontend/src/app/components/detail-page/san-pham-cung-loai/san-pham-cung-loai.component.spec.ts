import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamCungLoaiComponent } from './san-pham-cung-loai.component';

describe('SanPhamCungLoaiComponent', () => {
  let component: SanPhamCungLoaiComponent;
  let fixture: ComponentFixture<SanPhamCungLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanPhamCungLoaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamCungLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
