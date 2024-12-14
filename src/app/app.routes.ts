import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Domyślny routing
  { path: 'home', component: MainContentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  {path: 'app-ads.txt', redirectTo: 'assets/app-ads.txt'},
  { path: '**', redirectTo: 'home' },
];