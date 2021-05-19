import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamDangBanComponent } from './san-pham-dang-ban.component';

describe('SanPhamDangBanComponent', () => {
  let component: SanPhamDangBanComponent;
  let fixture: ComponentFixture<SanPhamDangBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanPhamDangBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamDangBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
