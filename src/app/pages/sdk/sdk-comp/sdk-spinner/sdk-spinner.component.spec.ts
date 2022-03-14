import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkSpinnerComponent } from './sdk-spinner.component';

describe('SdkSpinnerComponent', () => {
  let component: SdkSpinnerComponent;
  let fixture: ComponentFixture<SdkSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
