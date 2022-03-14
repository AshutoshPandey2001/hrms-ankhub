import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdkCompComponent } from './sdk-comp.component';


describe('SdkCompComponent', () => {
  let component: SdkCompComponent;
  let fixture: ComponentFixture<SdkCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
