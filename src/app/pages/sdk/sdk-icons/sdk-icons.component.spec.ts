import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkIconsComponent } from './sdk-icons.component';

describe('SdkIconsComponent', () => {
  let component: SdkIconsComponent;
  let fixture: ComponentFixture<SdkIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
