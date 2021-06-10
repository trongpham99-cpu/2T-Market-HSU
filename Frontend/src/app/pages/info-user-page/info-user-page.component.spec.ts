import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserPageComponent } from './info-user-page.component';

describe('InfoUserPageComponent', () => {
  let component: InfoUserPageComponent;
  let fixture: ComponentFixture<InfoUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
