import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// **** components ****
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { ForgotComponent} from './components/forgot/forgot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// **** pages ****
// home-page
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlideHomeComponent } from './pages/home-page/components/slide-home/slide-home.component';
// landing-page
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
//profile
import { ProfileSettingsComponent } from './pages/user/profile/profile-settings/profile-settings.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ProfileInformationComponent } from './pages/user/profile/profile-information/profile-information.component';
import { FavoritesComponent } from './pages/user/profile/favorites/favorites.component';
import { ProjectsComponent } from './pages/user/profile/projects/projects.component';
// services-published
import { ServicesPublishedComponent } from './pages/user/profile/services-published/services-published.component';
import { ServiceCardComponent } from './pages/user/profile/services-published/components/service-card/service-card.component';
import { FinanceComponent } from './pages/user/profile/finance/finance.component';
import { ReferredComponent } from './pages/user/profile/referred/referred.component';
// publish-now
import { PublishNowComponent } from './pages/publish-now/publish-now.component';
import { PublishServiceComponent } from './pages/publish-now/publish-service/publish-service.component';
//about
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { ServiceConditionsComponent } from './pages/about/service-conditions/service-conditions.component';

const routes: Routes = [
  {path:'footer', component:FooterComponent},
  {path:'header', component:HeaderComponent},
  {path:'singin', component:SinginComponent},
  {path:'singup', component:SingupComponent},
  {path:'forgot', component:ForgotComponent},
  // home-page
  {path:'home-page', component:HomePageComponent},
  {path:'slide-home', component:SlideHomeComponent},
  // landing-page
  {path:'landing-page', component:LandingPageComponent},
  // profile
  {path:'profile-settings', component:ProfileSettingsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profile-information', component:ProfileInformationComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:'projects', component:ProjectsComponent},
  // services-published
  {path:'services-published', component:ServicesPublishedComponent},
  {path:'services-card', component:ServiceCardComponent},
  {path:'finance', component: FinanceComponent},
  {path:'referred', component:ReferredComponent},
  // publish-now
  {path:'publish-now', component:PublishNowComponent},
  {path:'publish-service', component:PublishServiceComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'service-conditions', component:ServiceConditionsComponent},
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
