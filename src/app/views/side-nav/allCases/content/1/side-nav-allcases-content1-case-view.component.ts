import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {
  AllowedNetsService,
  AllowedNetsServiceFactory,
  CaseViewService,
  CategoryFactory,
  defaultCaseSearchCategoriesFactory,
  InjectedTabbedCaseViewData,
  LoggerService,
  NAE_BASE_FILTER,
  NAE_SEARCH_CATEGORIES,
  NAE_TAB_DATA,
  PetriNetSearchRequest,
  SearchService,
  SimpleFilter,
  TabbedCaseView,
  ViewIdService,
} from '@netgrif/components-core';
import {HeaderComponent} from '@netgrif/components';

const localAllowedNetsFactory = (factory: AllowedNetsServiceFactory) => {
  return factory.createFromArray(NETS);
};

const NETS = [
  'child_enum_addresses',
  'child_enum_vehicles',
  'main_enum_addresses',
  'main_enum_vehicles',
  'ri_to_wi',
  'wi_to_ri',
  'customer',
  'notification',
  'repair_item',
  'repair',
  'vehicle',
  'warehouse_item',
  'warehouse'];

const buildFormProcessQuery = (processIdentifiers = NETS): Array<PetriNetSearchRequest> => {
  const query = [];
  processIdentifiers.forEach((petriNet) => {
    query.push({ identifier: petriNet });
  });
  return query;
}

const baseFilterFactory = () => {
  return {
    filter: SimpleFilter.fromCaseQuery({
      process: buildFormProcessQuery(),
    })
  };
};

@Component({
  selector: 'app-side-nav-allcases-content1-case-view',
  templateUrl: './side-nav-allcases-content1-case-view.component.html',
  styleUrls: ['./side-nav-allcases-content1-case-view.component.scss'],
  providers: [
    CategoryFactory,
    CaseViewService,
    SearchService,
    {
      provide: NAE_BASE_FILTER,
      useFactory: baseFilterFactory
    },
    {
      provide: AllowedNetsService,
      useFactory: localAllowedNetsFactory,
      deps: [AllowedNetsServiceFactory]
    },
    ViewIdService,
    {provide: NAE_SEARCH_CATEGORIES, useFactory: defaultCaseSearchCategoriesFactory, deps: [CategoryFactory]},
  ]
})
export class SideNavAllcasesContent1CaseViewComponent extends TabbedCaseView implements AfterViewInit {

  @ViewChild('header') public caseHeaderComponent: HeaderComponent;

  constructor(caseViewService: CaseViewService,
              loggerService: LoggerService,
              @Inject(NAE_TAB_DATA) injectedTabData: InjectedTabbedCaseViewData) {
    super(caseViewService, loggerService, injectedTabData, undefined, undefined, undefined, {
      enableCaseTitle: true,
      isCaseTitleRequired: true
    });
  }

  ngAfterViewInit(): void {
    super.initializeHeader(this.caseHeaderComponent);
  }

}
