import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkDatepickerComponent } from './sdk-datepicker.component';

describe('SdkDatepickerComponent', () => {
  let component: SdkDatepickerComponent;
  let fixture: ComponentFixture<SdkDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
