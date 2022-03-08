import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtkarshaDemoComponent } from './utkarsha-demo.component';

describe('UtkarshaDemoComponent', () => {
  let component: UtkarshaDemoComponent;
  let fixture: ComponentFixture<UtkarshaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtkarshaDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtkarshaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
