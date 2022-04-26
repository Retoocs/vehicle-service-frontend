import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavAllcasesAdminContent0TaskViewComponent} from './content/0/side-nav-allcases-admin-content0-task-view.component';
import {SideNavAllcasesAdminContent1CaseViewComponent} from './content/1/side-nav-allcases-admin-content1-case-view.component';
import {SideNavAllcasesAdminContent2CaseViewComponent} from './content/2/side-nav-allcases-admin-content2-case-view.component';


@Component({
  selector: 'app-allcases-case',
  templateUrl: './allcases.component.html',
  styleUrls: ['./allcases.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'allcases'
    },
    ViewIdService,
  ]
})
export class AllcasesAdminComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'All Cases',
      },
      canBeClosed: false,
      tabContentComponent: SideNavAllcasesAdminContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavAllcasesAdminContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
    {
      label: {
        icon: 'face',
        text: 'My Cases',
      },
      canBeClosed: false,
      tabContentComponent: SideNavAllcasesAdminContent2CaseViewComponent,
      order: -1,
      injectedObject: {
        tabViewComponent: SideNavAllcasesAdminContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
