import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotReceivedComponent } from './not-received.component';

describe('NotReceivedComponent', () => {
  let component: NotReceivedComponent;
  let fixture: ComponentFixture<NotReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
