import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/components-core';
import {SideNavVehiclesContent0TaskViewComponent} from './content/0/side-nav-vehicles-content0-task-view.component';
import {SideNavVehiclesContent1CaseViewComponent} from './content/1/side-nav-vehicles-content1-case-view.component';


@Component({
  selector: 'app-vehicles-case',
  templateUrl: './vehicles-case.component.html',
  styleUrls: ['./vehicles-case.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'vehicles'
    },
    ViewIdService,
  ]
})
export class VehiclesComponent {

  tabs = [
    {
      label: {
        icon: 'storage',
        text: 'Vehicles',
      },
      canBeClosed: false,
      tabContentComponent: SideNavVehiclesContent1CaseViewComponent,
      order: -2,
      injectedObject: {
        tabViewComponent: SideNavVehiclesContent0TaskViewComponent,
        tabViewOrder: 0
      }
    },
  ];

}
