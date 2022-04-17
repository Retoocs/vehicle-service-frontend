import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationModule, ConfigurationService, MaterialModule, TranslateLibModule, ViewService} from '@netgrif/components-core';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AuthenticationComponentModule,
  CaseViewComponentModule,
  HeaderComponentModule,
  LoginFormComponentModule,
  NavigationComponentModule,
  NewCaseComponent,
  PanelComponentModule,
  QuickPanelComponentModule,
  SearchComponentModule,
  SideMenuComponentModule,
  SideMenuContentComponentModule,
  TabsComponentModule,
  ToolbarComponentModule,
} from '@netgrif/components';
import {TemplateFrontendConfigurationService} from './template-frontend-configuration.service';
import {TemplateFrontendViewService} from './template-frontend-view.service';
import {LoginComponent} from './views/login/login.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import {
  SideNavTabviewallcaseContent0TaskViewComponent
} from './views/side-nav/tabViewAllCase/content/0/side-nav-tabviewallcase-content0-task-view.component';
import {
  SideNavTabviewallcaseContent1CaseViewComponent
} from './views/side-nav/tabViewAllCase/content/1/side-nav-tabviewallcase-content1-case-view.component';
import {
  SideNavTabviewallcaseContent2CaseViewComponent
} from './views/side-nav/tabViewAllCase/content/2/side-nav-tabviewallcase-content2-case-view.component';
import {TabViewAllCaseComponent} from './views/side-nav/tabViewAllCase/tab-view-all-case.component';
import {
  SideNavVehiclesContent0TaskViewComponent
} from './views/side-nav/vehicles/content/0/side-nav-vehicles-content0-task-view.component';
import {
  SideNavVehiclesContent1CaseViewComponent
} from './views/side-nav/vehicles/content/1/side-nav-vehicles-content1-case-view.component';
import {VehiclesComponent} from './views/side-nav/vehicles/vehicles-case.component';
import {
  SideNavCustomersContent0TaskViewComponent
} from './views/side-nav/customers/content/0/side-nav-customers-content0-task-view.component';
import {
  SideNavCustomersContent1CaseViewComponent
} from './views/side-nav/customers/content/1/side-nav-customers-content1-case-view.component';
import {CustomersComponent} from './views/side-nav/customers/customers-case.component';
import {
  SideNavWarehousesContent0TaskViewComponent
} from './views/side-nav/warehouses/content/0/side-nav-warehouses-content0-task-view.component';
import {
  SideNavWarehousesContent1CaseViewComponent
} from './views/side-nav/warehouses/content/1/side-nav-warehouses-content1-case-view.component';
import {WarehousesComponent} from './views/side-nav/warehouses/warehouses-case.component';
import {
  SideNavRepairsContent0TaskViewComponent
} from './views/side-nav/repairs/content/0/side-nav-repairs-content0-task-view.component';
import {
  SideNavRepairsContent1CaseViewComponent
} from './views/side-nav/repairs/content/1/side-nav-repairs-content1-case-view.component';
import {RepairsComponent} from './views/side-nav/repairs/repairs-case.component';
import {
  SideNavRequestsContent0TaskViewComponent
} from './views/side-nav/requests/content/0/side-nav-requests-content0-task-view.component';
import {
  SideNavRequestsContent1CaseViewComponent
} from './views/side-nav/requests/content/1/side-nav-requests-content1-case-view.component';
import {RequestsComponent} from './views/side-nav/requests/requests-case.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    EmptyViewComponent,
    SideNavTabviewallcaseContent0TaskViewComponent,
    SideNavTabviewallcaseContent1CaseViewComponent,
    SideNavTabviewallcaseContent2CaseViewComponent,
    TabViewAllCaseComponent,
    SideNavVehiclesContent0TaskViewComponent,
    SideNavVehiclesContent1CaseViewComponent,
    VehiclesComponent,
    SideNavCustomersContent0TaskViewComponent,
    SideNavCustomersContent1CaseViewComponent,
    CustomersComponent,
    SideNavWarehousesContent0TaskViewComponent,
    SideNavWarehousesContent1CaseViewComponent,
    WarehousesComponent,
    SideNavRepairsContent0TaskViewComponent,
    SideNavRepairsContent1CaseViewComponent,
    RepairsComponent,
    SideNavRequestsContent0TaskViewComponent,
    SideNavRequestsContent1CaseViewComponent,
    RequestsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexModule,
    MaterialModule,
    FlexLayoutModule,
    AuthenticationModule,
    SideMenuComponentModule,
    SideMenuContentComponentModule,
    AuthenticationComponentModule,
    TranslateLibModule,
    LoginFormComponentModule,
    ToolbarComponentModule,
    NavigationComponentModule,
    HeaderComponentModule,
    PanelComponentModule,
    CaseViewComponentModule,
    SearchComponentModule,
    QuickPanelComponentModule,
    TabsComponentModule
  ],
  providers: [
    {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
    {provide: ViewService, useClass: TemplateFrontendViewService}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewCaseComponent,
    LoginComponent,
    SidenavComponent,
    EmptyViewComponent,
    SideNavTabviewallcaseContent0TaskViewComponent,
    SideNavTabviewallcaseContent1CaseViewComponent,
    SideNavTabviewallcaseContent2CaseViewComponent,
    TabViewAllCaseComponent,
    SideNavVehiclesContent0TaskViewComponent,
    SideNavVehiclesContent1CaseViewComponent,
    VehiclesComponent,
    SideNavCustomersContent0TaskViewComponent,
    SideNavCustomersContent1CaseViewComponent,
    CustomersComponent,
    SideNavWarehousesContent0TaskViewComponent,
    SideNavWarehousesContent1CaseViewComponent,
    WarehousesComponent,
    SideNavRepairsContent0TaskViewComponent,
    SideNavRepairsContent1CaseViewComponent,
    RepairsComponent,
    SideNavRequestsContent0TaskViewComponent,
    SideNavRequestsContent1CaseViewComponent,
    RequestsComponent,
  ]
})
export class AppModule {
}
