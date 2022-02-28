import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubhamDemoComponent } from './shubham-demo.component';

describe('ShubhamDemoComponent', () => {
  let component: ShubhamDemoComponent;
  let fixture: ComponentFixture<ShubhamDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShubhamDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShubhamDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
