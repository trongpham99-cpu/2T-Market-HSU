import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaitestComponent } from './taitest.component';

describe('TaitestComponent', () => {
  let component: TaitestComponent;
  let fixture: ComponentFixture<TaitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaitestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
