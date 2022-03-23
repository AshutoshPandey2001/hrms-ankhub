import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingreportComponent } from './accountingreport.component';

describe('AccountingreportComponent', () => {
  let component: AccountingreportComponent;
  let fixture: ComponentFixture<AccountingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
