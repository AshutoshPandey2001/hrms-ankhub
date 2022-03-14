import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkPluginsComponent } from './sdk-plugins.component';

describe('SdkPluginsComponent', () => {
  let component: SdkPluginsComponent;
  let fixture: ComponentFixture<SdkPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
