import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RequestsComponent} from './requests-case.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';

describe('RequestsComponent', () => {
  let component: RequestsComponent;
  let fixture: ComponentFixture<RequestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
