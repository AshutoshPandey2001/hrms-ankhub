import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrunmayeeDemoComponent } from './mrunmayee-demo.component';

describe('MrunmayeeDemoComponent', () => {
  let component: MrunmayeeDemoComponent;
  let fixture: ComponentFixture<MrunmayeeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrunmayeeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrunmayeeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
