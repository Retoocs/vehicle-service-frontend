import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavAllcasesAdminContent0TaskViewComponent} from './content/0/side-nav-allcases-admin-content0-task-view.component';
import {SideNavAllcasesAdminContent1CaseViewComponent} from './content/1/side-nav-allcases-admin-content1-case-view.component';


@Component({
  selector: 'app-allcases-admin-case',
  templateUrl: './allcases-admin.component.html',
  styleUrls: ['./allcases-admin.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'allcases-admin'
    },
    ViewIdService,
  ]
})
export class AllcasesAdminComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'All Cases - Admin',
      },
      canBeClosed: false,
      tabContentComponent: SideNavAllcasesAdminContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavAllcasesAdminContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
