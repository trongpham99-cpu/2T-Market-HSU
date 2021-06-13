import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamDaBanComponent } from './san-pham-da-ban.component';

describe('SanPhamDaBanComponent', () => {
  let component: SanPhamDaBanComponent;
  let fixture: ComponentFixture<SanPhamDaBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanPhamDaBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamDaBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
