import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanhthuUserPageComponent } from './doanhthu-user-page.component';

describe('DoanhthuUserPageComponent', () => {
  let component: DoanhthuUserPageComponent;
  let fixture: ComponentFixture<DoanhthuUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoanhthuUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoanhthuUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
