import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AllcasesComponent} from './allcases.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';

describe('TabViewAllCaseComponent', () => {
  let component: AllcasesComponent;
  let fixture: ComponentFixture<AllcasesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
