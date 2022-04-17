import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {
  AllowedNetsService,
  AllowedNetsServiceFactory, Case, CaseResourceService,
  CaseViewService,
  CategoryFactory, CreateCaseEventOutcome,
  defaultCaseSearchCategoriesFactory, EventOutcomeMessageResource,
  InjectedTabbedCaseViewData,
  LoggerService,
  NAE_BASE_FILTER,
  NAE_SEARCH_CATEGORIES,
  NAE_TAB_DATA, ProcessService,
  SearchService,
  SimpleFilter, SnackBarService,
  TabbedCaseView,
  ViewIdService,
} from '@netgrif/components-core';
import {HeaderComponent} from '@netgrif/components';
import {Observable, Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

const localAllowedNetsFactory = (factory: AllowedNetsServiceFactory) => {
  return factory.createFromArray(['repair']);
};

const baseFilterFactory = () => {
  return {
    filter: SimpleFilter.fromCaseQuery({
      process: {identifier: 'repair'},
    })
  };
};

@Component({
  selector: 'app-side-nav-repairs-content1-case-view',
  templateUrl: './side-nav-repairs-content1-case-view.component.html',
  styleUrls: ['./side-nav-repairs-content1-case-view.component.scss'],
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
export class SideNavRepairsContent1CaseViewComponent extends TabbedCaseView implements AfterViewInit {

  @ViewChild('header') public caseHeaderComponent: HeaderComponent;

  constructor(caseViewService: CaseViewService,
              loggerService: LoggerService,
              private _processService: ProcessService,
              private _caseResourceService: CaseResourceService,
              private _snackBarService: SnackBarService,
              private _translate: TranslateService,
              @Inject(NAE_TAB_DATA) injectedTabData: InjectedTabbedCaseViewData) {
    super(caseViewService, loggerService, injectedTabData, undefined, undefined, undefined, {
      enableCaseTitle: true,
      isCaseTitleRequired: true
    });
  }

  ngAfterViewInit(): void {
    super.initializeHeader(this.caseHeaderComponent);
  }

  createNewCase(): Observable<Case> {
    const myCase = this.createInstance('repair');
    myCase.subscribe( kaze => {
      if (this._caseViewService.viewEnabled(kaze)) {
        this.openTab(kaze);
      }
    });
    return myCase;
  }

  private createInstance(petriNetId: string): Observable<Case> {
    let msgObservable: Observable<EventOutcomeMessageResource>;
    const myCase = new Subject<Case>();

    this._processService.getNet(petriNetId).subscribe(net => {
      const newCase = {
        title: net.defaultCaseName,
        color: 'panel-primary-icon',
        netId: net.stringId
      };

      msgObservable = this._caseResourceService.createCase(newCase);
      msgObservable.subscribe((response: EventOutcomeMessageResource) => {
        this._snackBarService.openSuccessSnackBar(this._translate.instant('side-menu.new-case.createCase')
          + ' ' + this._translate.instant('side-menu.new-case.defaultCaseName'));
        this._caseViewService.reload();
        myCase.next((response.outcome as CreateCaseEventOutcome).aCase);
        myCase.complete();
      }, error => this._snackBarService.openErrorSnackBar(error.message ? error.message : error));

    });
    return myCase.asObservable();
  }

}
