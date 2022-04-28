import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigurationService, LoggerService, ViewService} from '@netgrif/components-core';
import {LoginComponent} from './views/login/login.component';
import {SignupComponent} from './views/signup/signup.component';
import {SidenavComponent} from './views/side-nav/sidenav.component';
import {EmptyViewComponent} from './views/side-nav/emptyView/empty-view.component';
import { AllcasesComponent } from './views/side-nav/allCases/allcases.component';
import { AllcasesAdminComponent } from './views/side-nav/allCasesAdmin/allcases-admin.component';
import {VehiclesComponent} from './views/side-nav/vehicles/vehicles-case.component';
import {CustomersComponent} from './views/side-nav/customers/customers-case.component';
import {WarehousesComponent} from './views/side-nav/warehouses/warehouses-case.component';
import {RepairsComponent} from './views/side-nav/repairs/repairs-case.component';
import {RequestsComponent} from './views/side-nav/requests/requests-case.component';
import {UserInviteComponent} from './views/side-nav/userInvite/user-invite.component';
import {RoleAssignmentComponent} from './views/side-nav/roleAssignment/role-assignment.component';


@Injectable({
  providedIn: 'root'
})
export class TemplateFrontendViewService extends ViewService {
  constructor(configurationService: ConfigurationService, router: Router, loggerService: LoggerService) {
    // This class is managed by schematics. Avoid modifying it by hand.
    // If you want to add views to the application run the 'create-view' schematic.
    super([
      {id: 'AllcasesComponent', class: AllcasesComponent},
      {id: 'AllcasesAdminComponent', class: AllcasesAdminComponent},
      {id: 'VehiclesComponent', class: VehiclesComponent},
      {id: 'CustomersComponent', class: CustomersComponent},
      {id: 'WarehousesComponent', class: WarehousesComponent},
      {id: 'RepairsComponent', class: RepairsComponent},
      {id: 'RequestsComponent', class: RequestsComponent},
      {id: 'EmptyViewComponent', class: EmptyViewComponent},
      {id: 'SidenavComponent', class: SidenavComponent},
      {id: 'LoginComponent', class: LoginComponent},
      {id: 'SignupComponent', class: SignupComponent},
      {id: 'RoleAssignmentComponent', class: RoleAssignmentComponent},
      {id: 'UserInviteComponent', class: UserInviteComponent}

    ], configurationService, router, loggerService);
  }
}
