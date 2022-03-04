import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshuDemoComponent } from './ashu-demo.component';

describe('AshuDemoComponent', () => {
  let component: AshuDemoComponent;
  let fixture: ComponentFixture<AshuDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshuDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshuDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
