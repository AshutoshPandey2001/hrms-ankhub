import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkDatatableComponent } from './sdk-datatable.component';

describe('SdkDatatableComponent', () => {
  let component: SdkDatatableComponent;
  let fixture: ComponentFixture<SdkDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
