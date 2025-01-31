import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { A11yModule } from "@angular/cdk/a11y";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ObserversModule } from "@angular/cdk/observers";
import { NgxGaugeModule } from "ngx-gauge";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./services/auth.interceptor";
import { registerLocaleData } from "@angular/common";
import localeEn from "@angular/common/locales/en";
import localePt from "@angular/common/locales/pt";
import localePtExtra from "@angular/common/locales/extra/pt";

import { MaterialModule } from "./material/material.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminConsoleComponent } from "./pages/admin-console/admin-console.component";
import { UserAuthErrorDialogComponent } from "./dialogs/user-auth-error-dialog/user-auth-error-dialog.component";
import { BreadcrumbsComponent } from "./pages/admin-console/breadcrumbs/breadcrumbs.component";
import { NavbarComponent } from "./pages/admin-console/navbar/navbar.component";
import { UsersComponent } from "./pages/users/users.component";
import { HomeComponent } from "./pages/home/home.component";
import { ListOfUsersComponent } from "./pages/users/list-of-users/list-of-users.component";
import { WebsitesComponent } from "./pages/websites/websites.component";
import { ListOfWebsitesComponent } from "./pages/websites/list-of-websites/list-of-websites.component";
import { NotFound404Component } from "./pages/not-found-404/not-found-404.component";
import { EntitiesComponent } from "./pages/entities/entities.component";
import { ListOfEntitiesComponent } from "./pages/entities/list-of-entities/list-of-entities.component";
import { DomainsComponent } from "./pages/domains/domains.component";
import { ListOfDomainsComponent } from "./pages/domains/list-of-domains/list-of-domains.component";
import { PagesComponent } from "./pages/pages/pages.component";
import { ListOfPagesComponent } from "./pages/pages/list-of-pages/list-of-pages.component";
import { TagsComponent } from "./pages/tags/tags.component";
import { ListOfTagsComponent } from "./pages/tags/list-of-tags/list-of-tags.component";
import { AddTagDialogComponent } from "./dialogs/add-tag-dialog/add-tag-dialog.component";
import { BottomSheetComponent } from "./dialogs/bottom-sheet/bottom-sheet.component";
import { AddUserDialogComponent } from "./dialogs/add-user-dialog/add-user-dialog.component";
import { AddEntityDialogComponent } from "./dialogs/add-entity-dialog/add-entity-dialog.component";
import { AddWebsiteDialogComponent } from "./dialogs/add-website-dialog/add-website-dialog.component";
import { AddDomainDialogComponent } from "./dialogs/add-domain-dialog/add-domain-dialog.component";
import { AddPageDialogComponent } from "./dialogs/add-page-dialog/add-page-dialog.component";
import { EditEntityDialogComponent } from "./dialogs/edit-entity-dialog/edit-entity-dialog.component";
import { LoadingComponent } from "./global/loading/loading.component";
import { ErrorComponent } from "./global/error/error.component";
import{SampleChoiceComponent} from "./pages/website/sample-choice/sample-choice.component";
import{TableCardComponent} from "./pages/website/table-card/table-card.component";
import { FormCardComponent } from "./pages/website/form-card/form-card.component";

import { AdminAuthGuard } from "./guards/admin-auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";

import { HtmlPipe } from "./pipes/html.pipe";
import { ToFixedPipe } from "./pipes/to-fixed.pipe";
import { EntityComponent } from "./pages/entity/entity.component";
import { TagComponent } from "./pages/tag/tag.component";
import { UserComponent } from "./pages/user/user.component";
import { WebsiteComponent } from "./pages/website/website.component";
import { DomainComponent } from "./pages/domain/domain.component";
import { PageComponent } from "./pages/page/page.component";
import { ListOfEvaluationsComponent } from "./pages/page/list-of-evaluations/list-of-evaluations.component";
import { EvaluationResultsComponent } from "./pages/evaluation-results/evaluation-results.component";
import { ElementResultComponent } from "./pages/element-result/element-result.component";
import { WebpageCodeComponent } from "./pages/webpage-code/webpage-code.component";
import { ItemComponent } from "./pages/home/item/item.component";
import { EditTagDialogComponent } from "./dialogs/edit-tag-dialog/edit-tag-dialog.component";
import { EditUserDialogComponent } from "./dialogs/edit-user-dialog/edit-user-dialog.component";
import { DeletePageDialogComponent } from "./dialogs/delete-page-dialog/delete-page-dialog.component";
import { DeleteDomainDialogComponent } from "./dialogs/delete-domain-dialog/delete-domain-dialog.component";
import { DeleteEvaluationDialogComponent } from "./dialogs/delete-evaluation-dialog/delete-evaluation-dialog.component";
import { EditWebsiteDialogComponent } from "./dialogs/edit-website-dialog/edit-website-dialog.component";
import { ChooseObservatoryWebsitePagesDialogComponent } from "./dialogs/choose-observatory-website-pages-dialog/choose-observatory-website-pages-dialog.component";
import { ChooseObservatoryPagesDialogComponent } from "./dialogs/choose-observatory-pages-dialog/choose-observatory-pages-dialog.component";
import { AddPagesErrorsDialogComponent } from "./dialogs/add-pages-errors-dialog/add-pages-errors-dialog.component";
import { DomainStatisticsComponent } from "./pages/domain/domain-statistics/domain-statistics.component";
import { WebsiteStatisticsComponent } from "./pages/website/website-statistics/website-statistics.component";
import { ScoreDistributionDialogComponent } from "./dialogs/score-distribution-dialog/score-distribution-dialog.component";
import { ErrorDistributionDialogComponent } from "./dialogs/error-distribution-dialog/error-distribution-dialog.component";
import { CrawlerDialogComponent } from "./dialogs/crawler-dialog/crawler-dialog.component";
import { AddCrawlerPagesDialogComponent } from "./dialogs/add-crawler-pages-dialog/add-crawler-pages-dialog.component";
import { DeleteWebsitePagesDialogComponent } from "./dialogs/delete-website-pages-dialog/delete-website-pages-dialog.component";
import { ListOfPagesUserComponent } from "./pages/pages/list-of-pages-user/list-of-pages-user.component";
import { DeleteWebsiteConfirmationDialogComponent } from "./dialogs/delete-website-confirmation-dialog/delete-website-confirmation-dialog.component";
import { DeleteTagConfirmationDialogComponent } from "./dialogs/delete-tag-confirmation-dialog/delete-tag-confirmation-dialog.component";
import { ListOfTagsUserComponent } from "./pages/tags/list-of-tags-user/list-of-tags-user.component";
import { ListOfWebsitesUserComponent } from "./pages/websites/list-of-websites-user/list-of-websites-user.component";
import { ImportWebsiteDialogComponent } from "./dialogs/import-website-dialog/import-website-dialog.component";
import { ImportTagDialogComponent } from "./dialogs/import-tag-dialog/import-tag-dialog.component";

import { EditDomainDialogComponent } from "./dialogs/edit-domain-dialog/edit-domain-dialog.component";

import { ListOfCrawlsComponent } from "./pages/list-of-crawls/list-of-crawls.component";
import { CrawlerConfigDialogComponent } from "./dialogs/crawler-config-dialog/crawler-config-dialog.component";
import { ChoosePagesToReEvaluateDialogComponent } from "./dialogs/choose-pages-to-re-evaluate-dialog/choose-pages-to-re-evaluate-dialog.component";
import { BackgroundEvaluationsInformationDialogComponent } from "./dialogs/background-evaluations-information-dialog/background-evaluations-information-dialog.component";
import { EvaluationErrorDialogComponent } from "./dialogs/evaluation-error-dialog/evaluation-error-dialog.component";
import { TopFiveErrorsComponent } from "./global/top-five-errors/top-five-errors.component";
import { TopFiveBestPracticesComponent } from "./global/top-five-best-practices/top-five-best-practices.component";
import { AccessibilityPlotComponent } from "./global/accessibility-plot/accessibility-plot.component";
import { CorrectionDistributionDialogComponent } from "./dialogs/correction-distribution-dialog/correction-distribution-dialog.component";
import { EntityStatisticsComponent } from "./pages/entity/entity-statistics/entity-statistics.component";
import { TagStatisticsComponent } from "./pages/tag/tag-statistics/tag-statistics.component";
import { AddDirectoryDialogComponent } from "./dialogs/add-directory-dialog/add-directory-dialog.component";
import { SuccessCriteriaCounterComponent } from "./global/success-criteria-counter/success-criteria-counter.component";
import { DirectoriesComponent } from "./pages/directories/directories.component";
import { ListOfDirectoriesComponent } from "./pages/directories/list-of-directories/list-of-directories.component";
import { EditDirectoryDialogComponent } from "./dialogs/edit-directory-dialog/edit-directory-dialog.component";
import { DirectoryComponent } from "./pages/directory/directory.component";

import { MatPaginatorIntl } from "@angular/material/paginator";
import { MatPaginatorIntlCustom } from "./paginator-intl.service";
import { DirectoryStatisticsComponent } from "./pages/directory/directory-statistics/directory-statistics.component";
import { CUSTOM_DATE_FORMATS, CustomDatePickerAdapter } from "./date-adapter";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { TagCrawlerInformationDialogComponent } from './dialogs/tag-crawler-information-dialog/tag-crawler-information-dialog.component';
import { SumElementsPipe } from "./pipes/sumelements.pipe";
import { CountTypesPipe } from "./pipes/countypes.pipes";
import { CounterPipe } from "./pipes/counterpipe.pipes";
import { ImageCardComponent } from "./pages/website/image-card/image-card.component";
import { IFrameCardComponent } from "./pages/website/iFrame-card/iFrame-card.component";
import { HeadingCardComponent } from "./pages/website/heading-card/heading-card.component";
import { NoHeadingComponent } from "./pages/website/noheading-card/noheading-card.component";
import { LandMarkCardComponent } from "./pages/website/landmark-card/landmark-card.component";
import { NoLandMarkCardComponent} from "./pages/website/nolandmark-card/nolandmark-card.component";
import { UniqueLandMarkCardComponent } from "./pages/website/uniquelandmark-card/uniquelandmark-card.component";
import { ButtonCardComponent } from "./pages/website/button-card/button-card.component";
import { PresentationCardComponent } from "./pages/website/presentation-card/presentation-card.component";
import { CheckBoxCardComponent } from "./pages/website/checkbox-card/checkbox-card.component";



registerLocaleData(localeEn, "en");
registerLocaleData(localePt, "pt", localePtExtra);

const appRoutes: Routes = [
  { path: "", component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: "console",
    component: AdminConsoleComponent,
    canActivate: [AdminAuthGuard],
    children: [
      { path: "", component: HomeComponent, canActivate: [AdminAuthGuard] },
      {
        path: "users",
        component: UsersComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "user/:user",
        component: UserComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "directories",
        component: DirectoriesComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "directory/:directory",
        component: DirectoryComponent,
        canActivate: [AdminAuthGuard],
      },
      { path: "tags", component: TagsComponent, canActivate: [AdminAuthGuard] },
      {
        path: "tag/:tag",
        component: TagComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "tag/:user/:tag",
        component: TagComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "entities",
        component: EntitiesComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "entity/:entity",
        component: EntityComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "websites",
        component: WebsitesComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "website/:website",
        component: WebsiteComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "website/:user/:website",
        component: WebsiteComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "website/:user/:website/:page",
        component: EvaluationResultsComponent,
        canActivate: [AdminAuthGuard],
      },
      //{ path: 'website/:user/:website/:page/:evaluation_id', component: EvaluationResultsComponent, canActivate: [AdminAuthGuard] },
      {
        path: "website/:user/:website/:page/code",
        component: WebpageCodeComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "website/:user/:website/:page/:ele",
        component: ElementResultComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "tag/website/:tag/:user/:website",
        component: WebsiteComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "tag/website/:tag/:user/:website/:page",
        component: EvaluationResultsComponent,
        canActivate: [AdminAuthGuard],
      },
      //{ path: 'tag/website/:tag/:user/:website/:page/', component: EvaluationResultsComponent, canActivate: [AdminAuthGuard] },
      {
        path: "tag/website/:tag/:user/:website/:page/code",
        component: WebpageCodeComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "tag/website/:tag/:user/:website/:page/:ele",
        component: ElementResultComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "domains",
        component: DomainsComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "domain/:domain",
        component: DomainComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "pages",
        component: PagesComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "page/:page",
        component: PageComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "page/:page/:evaluation_id",
        component: EvaluationResultsComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "page/:page/:evaluation_id/code",
        component: WebpageCodeComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "page/:page/:evaluation_id/:ele",
        component: ElementResultComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: "crawler",
        component: ListOfCrawlsComponent,
        canActivate: [AdminAuthGuard],
      },
    ],
  },
  { path: "**", component: NotFound404Component },
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminConsoleComponent,
    UserAuthErrorDialogComponent,
    BreadcrumbsComponent,
    NavbarComponent,
    UsersComponent,
    HomeComponent,
    ListOfUsersComponent,
    WebsitesComponent,
    ListOfWebsitesComponent,
    NotFound404Component,
    EntitiesComponent,
    ListOfEntitiesComponent,
    DomainsComponent,
    ListOfDomainsComponent,
    PagesComponent,
    ListOfPagesComponent,
    TagsComponent,
    ListOfTagsComponent,
    AddTagDialogComponent,
    BottomSheetComponent,
    AddUserDialogComponent,
    AddEntityDialogComponent,
    AddWebsiteDialogComponent,
    AddDomainDialogComponent,
    AddPageDialogComponent,
    EditEntityDialogComponent,
    LoadingComponent,
    ErrorComponent,
    HtmlPipe,
    ToFixedPipe,
    EntityComponent,
    TagComponent,
    UserComponent,
    WebsiteComponent,
    DomainComponent,
    PageComponent,
    ListOfEvaluationsComponent,
    EvaluationResultsComponent,
    ElementResultComponent,
    WebpageCodeComponent,
    ItemComponent,
    EditTagDialogComponent,
    EditUserDialogComponent,
    DeletePageDialogComponent,
    DeleteDomainDialogComponent,
    DeleteEvaluationDialogComponent,
    EditWebsiteDialogComponent,
    ChooseObservatoryWebsitePagesDialogComponent,
    ChooseObservatoryPagesDialogComponent,
    AddPagesErrorsDialogComponent,
    DomainStatisticsComponent,
    WebsiteStatisticsComponent,
    ScoreDistributionDialogComponent,
    ErrorDistributionDialogComponent,
    CrawlerDialogComponent,
    AddCrawlerPagesDialogComponent,
    DeleteWebsitePagesDialogComponent,
    ListOfPagesUserComponent,
    DeleteWebsiteConfirmationDialogComponent,
    DeleteTagConfirmationDialogComponent,
    ListOfPagesUserComponent,
    ListOfTagsUserComponent,
    ListOfWebsitesUserComponent,
    ImportWebsiteDialogComponent,
    ImportTagDialogComponent,
    EditDomainDialogComponent,
    ListOfCrawlsComponent,
    CrawlerConfigDialogComponent,
    ChoosePagesToReEvaluateDialogComponent,
    BackgroundEvaluationsInformationDialogComponent,
    EvaluationErrorDialogComponent,
    TopFiveErrorsComponent,
    TopFiveBestPracticesComponent,
    AccessibilityPlotComponent,
    CorrectionDistributionDialogComponent,
    EntityStatisticsComponent,
    TagStatisticsComponent,
    AddDirectoryDialogComponent,
    SuccessCriteriaCounterComponent,
    DirectoriesComponent,
    ListOfDirectoriesComponent,
    EditDirectoryDialogComponent,
    DirectoryComponent,
    DirectoryStatisticsComponent,
    TagCrawlerInformationDialogComponent,
    SampleChoiceComponent,
    TableCardComponent,
    ImageCardComponent,
    IFrameCardComponent,
    HeadingCardComponent,
    FormCardComponent,
    NoHeadingComponent,
    LandMarkCardComponent,
    NoLandMarkCardComponent,
    UniqueLandMarkCardComponent,
    ButtonCardComponent,
    PresentationCardComponent,
    CheckBoxCardComponent,
    SumElementsPipe,
    CountTypesPipe,
    CounterPipe,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    A11yModule,
    FormsModule,
    ReactiveFormsModule,
    ObserversModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      relativeLinkResolution: "legacy",
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxGaugeModule,
  ],
  entryComponents: [
    UserAuthErrorDialogComponent,
    AddUserDialogComponent,
    AddTagDialogComponent,
    AddEntityDialogComponent,
    AddWebsiteDialogComponent,
    AddDomainDialogComponent,
    AddPageDialogComponent,
    EditEntityDialogComponent,
    EditUserDialogComponent,
    EditTagDialogComponent,
    EditWebsiteDialogComponent,
    DeleteDomainDialogComponent,
    DeletePageDialogComponent,
    DeleteEvaluationDialogComponent,
    BottomSheetComponent,
    ChooseObservatoryWebsitePagesDialogComponent,
    ChooseObservatoryPagesDialogComponent,
    AddPagesErrorsDialogComponent,
    ScoreDistributionDialogComponent,
    ErrorDistributionDialogComponent,
    CrawlerDialogComponent,
    AddCrawlerPagesDialogComponent,
    DeleteWebsitePagesDialogComponent,
    DeleteWebsiteConfirmationDialogComponent,
    DeleteTagConfirmationDialogComponent,
    ImportTagDialogComponent,
    ImportWebsiteDialogComponent,
    EditDomainDialogComponent,
    CrawlerConfigDialogComponent,
    ChoosePagesToReEvaluateDialogComponent,
    BackgroundEvaluationsInformationDialogComponent,
    EvaluationErrorDialogComponent,
  ],
  providers: [
    AdminAuthGuard,
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlCustom,
    },
    { provide: DateAdapter, useClass: CustomDatePickerAdapter },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
