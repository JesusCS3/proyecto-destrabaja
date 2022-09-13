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
    RequirementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
