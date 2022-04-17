import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavWarehousesContent0TaskViewComponent} from './content/0/side-nav-warehouses-content0-task-view.component';
import {SideNavWarehousesContent1CaseViewComponent} from './content/1/side-nav-warehouses-content1-case-view.component';


@Component({
  selector: 'app-warehouses-case',
  templateUrl: './warehouses-case.component.html',
  styleUrls: ['./warehouses-case.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'warehouses'
    },
    ViewIdService,
  ]
})
export class WarehousesComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'Warehouses',
      },
      canBeClosed: false,
      tabContentComponent: SideNavWarehousesContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavWarehousesContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
