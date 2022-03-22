import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOrganizationComponent } from './event-organization.component';

describe('EventOrganizationComponent', () => {
  let component: EventOrganizationComponent;
  let fixture: ComponentFixture<EventOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
