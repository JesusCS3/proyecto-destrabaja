import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlideHomeComponent } from './pages/home-page/components/slide-home/slide-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { ServiceConditionsComponent } from './pages/about/service-conditions/service-conditions.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ProfileInformationComponent } from './pages/user/profile/profile-information/profile-information.component';
import { FavoritesComponent } from './pages/user/profile/favorites/favorites.component';
import { ProjectsComponent } from './pages/user/profile/projects/projects.component';
import { ProfileSettingsComponent } from './pages/user/profile/profile-settings/profile-settings.component';
import { FinanceComponent } from './pages/user/profile/finance/finance.component';
import { ReferredComponent } from './pages/user/profile/referred/referred.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesPublishedComponent } from './pages/user/profile/services-published/services-published.component';
import { ServiceCardComponent } from './pages/user/profile/services-published/components/service-card/service-card.component';
import { PublishNowComponent } from './pages/publish-now/publish-now.component';
import { PublishServiceComponent } from './pages/publish-now/publish-service/publish-service.component';
import { GeneralInfoComponent } from './pages/publish-now/publish-service/general-info/general-info.component';
import { ServiceDescriptionComponent } from './pages/publish-now/publish-service/service-description/service-description.component';
import { ServiceLevelsComponent } from './pages/publish-now/publish-service/service-levels/service-levels.component';
import { ExtrasComponent } from './pages/publish-now/publish-service/extras/extras.component';
import { RequirementsComponent } from './pages/publish-now/publish-service/requirements/requirements.component'
import { DeliverablesService } from './pages/publish-now/publish-service/service-levels/services/deliverables/deliverables.service';
import { FeaturesService } from './pages/publish-now/publish-service/service-levels/services/features/features.service';
import { PlansService } from './pages/publish-now/publish-service/service-levels/services/plans/plans.service';
import { PreviewComponent } from './pages/publish-now/publish-service/preview/preview.component';
import { PublishServiceCardComponent } from './pages/publish-now/publish-service/preview/components/publish-service-card/publish-service-card.component';
import { ConfirmComponent } from './pages/publish-now/publish-service/confirm/confirm.component';
import { GeneralInfoService } from './pages/publish-now/publish-service/general-info/services/general-info.service';
import { RequirementsService } from './pages/publish-now/publish-service/requirements/services/requirements.service';
import { ServiceDescriptionService } from './pages/publish-now/publish-service/service-description/services/service-description.service';
import { ServiceScreenComponent } from './pages/publish-now/publish-service/preview/components/service-screen/service-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublishProjectComponent } from './pages/publish-now/publish-project/publish-project.component';
import { GeneralInfoProjectComponent } from './pages/publish-now/publish-project/general-info-project/general-info-project/general-info-project.component';
import { GeneralInfoProjectEditComponent } from './pages/publish-now/publish-project/general-info-project/general-info-project-edit/general-info-project-edit.component';
import { PreviewProjectComponent } from './pages/publish-now/publish-project/preview-project/preview-project.component';
import { PublishProjectCardComponent } from './pages/publish-now/publish-project/preview-project/components/publish-project-card/publish-project-card.component';
import { ProjectScreenComponent } from './pages/publish-now/publish-project/preview-project/components/project-screen/project-screen.component';
import { ConfirmProjectComponent } from './pages/publish-now/publish-project/confirm-project/confirm-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinginComponent,
    SingupComponent,
    LandingPageComponent,
    HomePageComponent,
    SlideHomeComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ServiceConditionsComponent,
    ForgotComponent,
    ProfileSettingsComponent,
    ProfileComponent,
    ProfileInformationComponent,
    FavoritesComponent,
    ProjectsComponent,
    FinanceComponent,
    ReferredComponent,
    PageNotFoundComponent,
    ServicesPublishedComponent,
    ServiceCardComponent,
    PublishNowComponent,
    PublishServiceComponent,
    GeneralInfoComponent,
    ServiceDescriptionComponent,
    ServiceLevelsComponent,
    ExtrasComponent,
    RequirementsComponent,
    PreviewComponent,
    PublishServiceCardComponent,
    ConfirmComponent,
    ServiceScreenComponent,
    PublishProjectComponent,
    GeneralInfoProjectComponent,
    GeneralInfoProjectEditComponent,
    PreviewProjectComponent,
    PublishProjectCardComponent,
    ProjectScreenComponent,
    ConfirmProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    AuthService,
    GeneralInfoService,
    ServiceDescriptionService,
    DeliverablesService,
    FeaturesService,
    RequirementsService,
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
