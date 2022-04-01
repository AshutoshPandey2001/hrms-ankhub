import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkMultiplefileComponent } from './sdk-multiplefile.component';

describe('SdkMultiplefileComponent', () => {
  let component: SdkMultiplefileComponent;
  let fixture: ComponentFixture<SdkMultiplefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkMultiplefileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkMultiplefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
