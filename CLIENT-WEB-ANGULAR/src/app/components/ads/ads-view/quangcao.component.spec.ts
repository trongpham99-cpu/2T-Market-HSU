import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangcaoComponent } from './quangcao.component';

describe('QuangcaoComponent', () => {
  let component: QuangcaoComponent;
  let fixture: ComponentFixture<QuangcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuangcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuangcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
