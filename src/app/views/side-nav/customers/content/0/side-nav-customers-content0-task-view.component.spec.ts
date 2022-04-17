import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavCustomersContent0TaskViewComponent} from './side-nav-customers-content0-task-view.component';
import {
  AuthenticationMethodService,
  ConfigurationService,
  FilterType,
  MaterialModule,
  NAE_TAB_DATA,
  SimpleFilter
} from '@netgrif/components-core';
import {HeaderComponentModule, PanelComponentModule} from '@netgrif/components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TemplateFrontendConfigurationService} from '../../../../../template-frontend-configuration.service';

describe('SideNavCustomersContent0TaskViewComponent', () => {
  let component: SideNavCustomersContent0TaskViewComponent;
  let fixture: ComponentFixture<SideNavCustomersContent0TaskViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HeaderComponentModule,
        PanelComponentModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: NAE_TAB_DATA, useValue: {baseFilter: new SimpleFilter('id', FilterType.TASK, {})}},
        AuthenticationMethodService,
        {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService}
      ],
      declarations: [SideNavCustomersContent0TaskViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavCustomersContent0TaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
