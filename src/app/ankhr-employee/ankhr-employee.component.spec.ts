import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkhrEmployeeComponent } from './ankhr-employee.component';

describe('AnkhrEmployeeComponent', () => {
  let component: AnkhrEmployeeComponent;
  let fixture: ComponentFixture<AnkhrEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkhrEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkhrEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
