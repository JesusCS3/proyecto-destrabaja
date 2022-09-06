import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// **** components ****
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { ForgotComponent} from './components/forgot/forgot.component';
import { SlideHomeComponent } from './components/slide-home/slide-home.component';
// **** pages ****
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfileSettingsComponent } from './pages/user/settings/profile-settings/profile-settings.component';
//profile
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ProfileInformationComponent } from './pages/user/profile/profile-information/profile-information.component';
import { FavoritesComponent } from './pages/user/profile/favorites/favorites.component';
import { ProjectsComponent } from './pages/user/profile/projects/projects.component';
import { ServicesComponent } from './pages/user/profile/services/services.component';
import { FinanceComponent } from './pages/user/profile/finance/finance.component';
import { ReferredComponent } from './pages/user/profile/referred/referred.component';
//about
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { ServiceConditionsComponent } from './pages/about/service-conditions/service-conditions.component';

const routes: Routes = [
  {path:'footer', component:FooterComponent},
  {path:'header', component:HeaderComponent},
  {path:'singin', component:SinginComponent},
  {path:'singup', component:SingupComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'slide-home', component:SlideHomeComponent},
  {path:'home-page', component:HomePageComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'profile-settings', component:ProfileSettingsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'profile-information', component:ProfileInformationComponent},
  {path:'favorites', component:FavoritesComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'services', component:ServicesComponent},
  {path:'finance', component: FinanceComponent},
  {path:'referred', component:ReferredComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'service-conditions', component:ServiceConditionsComponent},
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'}
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
