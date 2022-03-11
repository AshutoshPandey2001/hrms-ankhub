import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkCrudComponent } from './sdk-crud.component';

describe('SdkCrudComponent', () => {
  let component: SdkCrudComponent;
  let fixture: ComponentFixture<SdkCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
