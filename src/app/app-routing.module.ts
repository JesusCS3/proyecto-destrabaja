import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { ForgotComponent} from './components/forgot/forgot.component';
//pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfileSettingsComponent } from './pages/user/settings/profile-settings/profile-settings.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { ServiceConditionsComponent } from './pages/about/service-conditions/service-conditions.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing-page'},
  {path:'footer', component:FooterComponent},
  {path:'header', component:HeaderComponent},
  {path:'singin', component:SinginComponent},
  {path:'singup', component:SingupComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'home-page', component:HomePageComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'profile-settings', component:ProfileSettingsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'service-conditions', component:ServiceConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
