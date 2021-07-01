import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDaBanComponent } from './user-da-ban.component';

describe('UserDaBanComponent', () => {
  let component: UserDaBanComponent;
  let fixture: ComponentFixture<UserDaBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDaBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDaBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
