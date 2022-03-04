import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivaniComponent } from './shivani.component';

describe('ShivaniComponent', () => {
  let component: ShivaniComponent;
  let fixture: ComponentFixture<ShivaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShivaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
