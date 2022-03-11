import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkMoreComponent } from './sdk-more.component';

describe('SdkMoreComponent', () => {
  let component: SdkMoreComponent;
  let fixture: ComponentFixture<SdkMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
