import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernnameComponent } from './usernname.component';

describe('UsernnameComponent', () => {
  let component: UsernnameComponent;
  let fixture: ComponentFixture<UsernnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
