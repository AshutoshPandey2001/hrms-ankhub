import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkAlertComponent } from './sdk-alert.component';

describe('SdkAlertComponent', () => {
  let component: SdkAlertComponent;
  let fixture: ComponentFixture<SdkAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
