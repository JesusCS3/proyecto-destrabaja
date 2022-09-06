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
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { ServiceConditionsComponent } from './pages/about/service-conditions/service-conditions.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ProfileSettingsComponent } from './pages/user/settings/profile-settings/profile-settings.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { SlideHomeComponent } from './components/slide-home/slide-home.component';
import { ProfileInformationComponent } from './pages/user/profile/profile-information/profile-information.component';
import { FavoritesComponent } from './pages/user/profile/favorites/favorites.component';
import { ProjectsComponent } from './pages/user/profile/projects/projects.component';
import { ServicesComponent } from './pages/user/profile/services/services.component';
import { FinanceComponent } from './pages/user/profile/finance/finance.component';
import { ReferredComponent } from './pages/user/profile/referred/referred.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SinginComponent,
    SingupComponent,
    LandingPageComponent,
    HomePageComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ServiceConditionsComponent,
    ForgotComponent,
    ProfileSettingsComponent,
    ProfileComponent,
    SlideHomeComponent,
    ProfileInformationComponent,
    FavoritesComponent,
    ProjectsComponent,
    ServicesComponent,
    FinanceComponent,
    ReferredComponent
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
