import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkToasterComponent } from './sdk-toaster.component';

describe('SdkToasterComponent', () => {
  let component: SdkToasterComponent;
  let fixture: ComponentFixture<SdkToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
