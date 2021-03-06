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
  SearchService,
  SimpleFilter,
  TabbedCaseView,
  ViewIdService,
} from '@netgrif/components-core';
import {HeaderComponent} from '@netgrif/components';

const localAllowedNetsFactory = (factory: AllowedNetsServiceFactory) => {
  return factory.createWithAllNets();
};

const baseFilterFactory = () => {
  return {
    filter: SimpleFilter.emptyCaseFilter()
  };
};

@Component({
  selector: 'app-side-nav-allcases-admin-content1-case-view',
  templateUrl: './side-nav-allcases-admin-content1-case-view.component.html',
  styleUrls: ['./side-nav-allcases-admin-content1-case-view.component.scss'],
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
export class SideNavAllcasesAdminContent1CaseViewComponent extends TabbedCaseView implements AfterViewInit {

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
