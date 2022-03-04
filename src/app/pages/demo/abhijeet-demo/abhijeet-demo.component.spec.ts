import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhijeetDemoComponent } from './abhijeet-demo.component';

describe('AbhijeetDemoComponent', () => {
  let component: AbhijeetDemoComponent;
  let fixture: ComponentFixture<AbhijeetDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhijeetDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhijeetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
