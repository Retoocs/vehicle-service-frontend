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
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'user-invite'
    },
    ViewIdService,
    SignUpService,
  ]
})
export class UserInviteComponent extends NetgrifInviteComponent {
  constructor(protected userInviteService: UserInviteService,
              protected orgList: OrganizationListService,
              protected signUpService: SignUpService,
              protected snackBar: SnackBarService,
              protected translate: TranslateService) {
    super(userInviteService, orgList, signUpService, snackBar, translate);
  }

}
