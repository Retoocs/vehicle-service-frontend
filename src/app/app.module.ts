import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationModule, ConfigurationService, MaterialModule, TranslateLibModule, ViewService} from '@netgrif/components-core';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AdminComponentModule,
  AuthenticationComponentModule,
  CaseViewComponentModule,
  HeaderComponentModule,
  LegalNoticeModule,
  LoginFormComponentModule,
  NavigationComponentModule,
  NewCaseComponent,
  PanelComponentModule,
  QuickPanelComponentModule,
  RegistrationFormComponentModule,
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
  SideNavAllcasesContent0TaskViewComponent
} from './views/side-nav/allCases/content/0/side-nav-allcases-content0-task-view.component';
import {
  SideNavAllcasesContent1CaseViewComponent
} from './views/side-nav/allCases/content/1/side-nav-allcases-content1-case-view.component';
import {
  SideNavAllcasesContent2CaseViewComponent
} from './views/side-nav/allCases/content/2/side-nav-allcases-content2-case-view.component';

import {
  SideNavAllcasesAdminContent0TaskViewComponent
} from './views/side-nav/allCasesAdmin/content/0/side-nav-allcases-admin-content0-task-view.component';
import {
  SideNavAllcasesAdminContent1CaseViewComponent
} from './views/side-nav/allCasesAdmin/content/1/side-nav-allcases-admin-content1-case-view.component';
import {AllcasesComponent} from './views/side-nav/allCases/allcases.component';
import { AllcasesAdminComponent } from './views/side-nav/allCasesAdmin/allcases-admin.component';
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
import {UserInviteComponent} from './views/side-nav/userInvite/user-invite.component';
import {SignupComponent} from './views/signup/signup.component';
import {RoleAssignmentComponent} from './views/side-nav/roleAssignment/role-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    EmptyViewComponent,
    SideNavAllcasesContent0TaskViewComponent,
    SideNavAllcasesContent1CaseViewComponent,
    SideNavAllcasesContent2CaseViewComponent,
    AllcasesComponent,
    SideNavAllcasesAdminContent0TaskViewComponent,
    SideNavAllcasesAdminContent1CaseViewComponent,
    AllcasesAdminComponent,
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
    UserInviteComponent,
    SignupComponent,
    RoleAssignmentComponent,
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
    TabsComponentModule,
    AdminComponentModule,
    RegistrationFormComponentModule,
    LegalNoticeModule,
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
    SideNavAllcasesContent0TaskViewComponent,
    SideNavAllcasesContent1CaseViewComponent,
    SideNavAllcasesContent2CaseViewComponent,
    AllcasesComponent,
    SideNavAllcasesAdminContent0TaskViewComponent,
    SideNavAllcasesAdminContent1CaseViewComponent,
    AllcasesAdminComponent,
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
    UserInviteComponent,
    SignupComponent,
    RoleAssignmentComponent,
  ]
})
export class AppModule {
}
