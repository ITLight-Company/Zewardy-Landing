import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
