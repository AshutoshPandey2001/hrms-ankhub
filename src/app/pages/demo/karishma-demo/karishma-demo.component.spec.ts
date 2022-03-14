import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarishmaDemoComponent } from './karishma-demo.component';

describe('KarishmaDemoComponent', () => {
  let component: KarishmaDemoComponent;
  let fixture: ComponentFixture<KarishmaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarishmaDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarishmaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
