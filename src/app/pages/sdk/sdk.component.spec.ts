import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdkModule } from './sdk.module';


describe('SdkModule', () => {
  let component: SdkModule;
  let fixture: ComponentFixture<SdkModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdkModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdkModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
