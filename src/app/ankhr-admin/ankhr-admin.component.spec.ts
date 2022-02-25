import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkhrAdminComponent } from './ankhr-admin.component';

describe('AnkhrAdminComponent', () => {
  let component: AnkhrAdminComponent;
  let fixture: ComponentFixture<AnkhrAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkhrAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkhrAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
