import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AllcasesAdminComponent} from './allcases.admin.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';

describe('TabViewAllCaseComponent', () => {
  let component: AllcasesAdminComponent;
  let fixture: ComponentFixture<AllcasesAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcasesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
