import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajalDDemoComponent } from './kajal-d-demo.component';

describe('KajalDDemoComponent', () => {
  let component: KajalDDemoComponent;
  let fixture: ComponentFixture<KajalDDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KajalDDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KajalDDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
