import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamChoDuyetComponent } from './san-pham-cho-duyet.component';

describe('SanPhamChoDuyetComponent', () => {
  let component: SanPhamChoDuyetComponent;
  let fixture: ComponentFixture<SanPhamChoDuyetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanPhamChoDuyetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamChoDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
