import {Component} from '@angular/core';
import {
  NAE_VIEW_ID_SEGMENT,
  SignUpService,
  ViewIdService
} from '@netgrif/components-core';

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
export class UserInviteComponent {
}
