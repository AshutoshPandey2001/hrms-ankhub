import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkitJDemoComponent } from './ankit-j-demo.component';

describe('AnkitJDemoComponent', () => {
  let component: AnkitJDemoComponent;
  let fixture: ComponentFixture<AnkitJDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnkitJDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkitJDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
