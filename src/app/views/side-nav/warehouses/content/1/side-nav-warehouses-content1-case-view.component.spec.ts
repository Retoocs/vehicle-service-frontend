import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavWarehousesContent1CaseViewComponent} from './side-nav-warehouses-content1-case-view.component';
import {
  AuthenticationMethodService,
  CaseHeaderService,
  ConfigurationService,
  MaterialModule,
  MockAuthenticationMethodService,
  NAE_TAB_DATA
} from '@netgrif/components-core';
import {HeaderComponentModule} from '@netgrif/components';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TemplateFrontendConfigurationService} from '../../../../../template-frontend-configuration.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SideNavWarehousesContent1CaseViewComponent', () => {
  let component: SideNavWarehousesContent1CaseViewComponent;
  let fixture: ComponentFixture<SideNavWarehousesContent1CaseViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        HeaderComponentModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: AuthenticationMethodService, useClass: MockAuthenticationMethodService},
        {provide: NAE_TAB_DATA, useValue: {tabViewComponent: undefined, tabViewOrder: 1}},
        {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
        CaseHeaderService
      ],
      declarations: [SideNavWarehousesContent1CaseViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavWarehousesContent1CaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
