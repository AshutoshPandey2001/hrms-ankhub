import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkImageuploaderComponent } from './sdk-imageuploader.component';

describe('SdkImageuploaderComponent', () => {
  let component: SdkImageuploaderComponent;
  let fixture: ComponentFixture<SdkImageuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkImageuploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkImageuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
