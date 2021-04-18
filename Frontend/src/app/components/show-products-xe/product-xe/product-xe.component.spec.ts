import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductXeComponent } from './product-xe.component';

describe('ProductXeComponent', () => {
  let component: ProductXeComponent;
  let fixture: ComponentFixture<ProductXeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductXeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
