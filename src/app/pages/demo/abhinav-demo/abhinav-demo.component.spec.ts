import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhinavDemoComponent } from './abhinav-demo.component';

describe('AbhinavDemoComponent', () => {
  let component: AbhinavDemoComponent;
  let fixture: ComponentFixture<AbhinavDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhinavDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhinavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
