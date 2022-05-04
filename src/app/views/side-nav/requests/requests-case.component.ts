import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavRequestsContent0TaskViewComponent} from './content/0/side-nav-requests-content0-task-view.component';
import {SideNavRequestsContent1CaseViewComponent} from './content/1/side-nav-requests-content1-case-view.component';


@Component({
  selector: 'app-requests-case',
  templateUrl: './requests-case.component.html',
  styleUrls: ['./requests-case.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'requests'
    },
    ViewIdService,
  ]
})
export class RequestsComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'Requests',
      },
      canBeClosed: false,
      tabContentComponent: SideNavRequestsContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavRequestsContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
