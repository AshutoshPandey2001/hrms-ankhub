import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecallerComponent } from './telecaller.component';

describe('TelecallerComponent', () => {
  let component: TelecallerComponent;
  let fixture: ComponentFixture<TelecallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelecallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
