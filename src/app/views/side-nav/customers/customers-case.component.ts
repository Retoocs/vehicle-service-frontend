import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavCustomersContent0TaskViewComponent} from './content/0/side-nav-customers-content0-task-view.component';
import {SideNavCustomersContent1CaseViewComponent} from './content/1/side-nav-customers-content1-case-view.component';


@Component({
  selector: 'app-customers-case',
  templateUrl: './customers-case.component.html',
  styleUrls: ['./customers-case.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'customers'
    },
    ViewIdService,
  ]
})
export class CustomersComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'Customers',
      },
      canBeClosed: false,
      tabContentComponent: SideNavCustomersContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavCustomersContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
