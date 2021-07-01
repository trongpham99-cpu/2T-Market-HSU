import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDoanhThuComponent } from './user-doanh-thu.component';

describe('UserDoanhThuComponent', () => {
  let component: UserDoanhThuComponent;
  let fixture: ComponentFixture<UserDoanhThuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDoanhThuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDoanhThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
