import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStructureComponent } from './final-structure.component';

describe('FinalStructureComponent', () => {
  let component: FinalStructureComponent;
  let fixture: ComponentFixture<FinalStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
