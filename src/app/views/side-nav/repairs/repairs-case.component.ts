import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavRepairsContent0TaskViewComponent} from './content/0/side-nav-repairs-content0-task-view.component';
import {SideNavRepairsContent1CaseViewComponent} from './content/1/side-nav-repairs-content1-case-view.component';


@Component({
  selector: 'app-repairs-case',
  templateUrl: './repairs-case.component.html',
  styleUrls: ['./repairs-case.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'repairs'
    },
    ViewIdService,
  ]
})
export class RepairsComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'Repairs',
      },
      canBeClosed: false,
      tabContentComponent: SideNavRepairsContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavRepairsContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
