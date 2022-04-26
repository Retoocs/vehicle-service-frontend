import {Component} from '@angular/core';
import {
  NAE_VIEW_ID_SEGMENT,
  OrganizationListService,
  SignUpService,
  SnackBarService,
  UserInviteService,
  ViewIdService
} from '@netgrif/components-core';
import {ɵe as NetgrifInviteComponent} from '@netgrif/components';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-role-assignment',
  templateUrl: './role-assignment.component.html',
  styleUrls: ['./role-assignment.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'role-assignment'
    },
    ViewIdService,
    SignUpService,
  ]
})
export class RoleAssignmentComponent {
}
