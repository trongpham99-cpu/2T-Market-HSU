import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsXeComponent } from './show-products-xe.component';

describe('ShowProductsXeComponent', () => {
  let component: ShowProductsXeComponent;
  let fixture: ComponentFixture<ShowProductsXeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductsXeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductsXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
