import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhayDemoComponent } from './abhay-demo.component';

describe('AbhayDemoComponent', () => {
  let component: AbhayDemoComponent;
  let fixture: ComponentFixture<AbhayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhayDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
