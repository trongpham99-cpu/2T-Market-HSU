import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIoComponent } from './chat-io.component';

describe('ChatIoComponent', () => {
  let component: ChatIoComponent;
  let fixture: ComponentFixture<ChatIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatIoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
