import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShraddhaDemoComponent } from './shraddha-demo.component';

describe('ShraddhaDemoComponent', () => {
  let component: ShraddhaDemoComponent;
  let fixture: ComponentFixture<ShraddhaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShraddhaDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShraddhaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
