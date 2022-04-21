import {Component, OnInit} from '@angular/core';
import {
  LoggerService, MessageResource,
  NAE_VIEW_ID_SEGMENT,
  SignUpService,
  SnackBarService,
  User,
  UserService,
  ViewIdService
} from '@netgrif/components-core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistrationFormComponent} from '@netgrif/components';
import {FormBuilder} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'signup'
    },
    ViewIdService,
    SignUpService,
  ]
})
export class SignupComponent implements OnInit{

  readonly TITLE = 'Registration form';
  readonly DESCRIPTION = 'Ukážka registration form...';
  public token: string;
  constructor(private _route: ActivatedRoute,
              protected _snackBarService: SnackBarService,
              protected _log: LoggerService,
              protected _router: Router,
              /*formBuilder: FormBuilder,
              signupService: SignUpService,
              translate: TranslateService*/) {
    // super(formBuilder, signupService, _log, translate);
  }
  ngOnInit(): void {
    this.token = this._route.snapshot.paramMap.get('token');
  }
  handleServerResponse(response: MessageResource | any): void {
    if (response.success) {
      this._snackBarService.openSuccessSnackBar('Registration success');
      // this._router.navigate(['login']).then(value => {
      //   this._log.debug('Routed to login' + value);
      // });
    } else {
      this._snackBarService.openErrorSnackBar('Registration failed');
      this._log.error('Request error', response.error);
    }
  }

}
