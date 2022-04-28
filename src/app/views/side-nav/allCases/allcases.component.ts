import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavAllcasesContent0TaskViewComponent} from './content/0/side-nav-allcases-content0-task-view.component';
import {SideNavAllcasesContent1CaseViewComponent} from './content/1/side-nav-allcases-content1-case-view.component';


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
export class AllcasesComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'All Cases',
      },
      canBeClosed: false,
      tabContentComponent: SideNavAllcasesContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavAllcasesContent0TaskViewComponent,
        tabViewOrder: 0
      }
    }
  ];

}
