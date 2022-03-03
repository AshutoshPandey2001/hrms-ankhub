import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojazadeComponent } from './poojazade.component';

describe('PoojazadeComponent', () => {
  let component: PoojazadeComponent;
  let fixture: ComponentFixture<PoojazadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoojazadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojazadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
