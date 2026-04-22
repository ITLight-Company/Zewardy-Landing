import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { SeoLandingComponent } from './seo-landing/seo-landing.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'article/:slug', component: SeoLandingComponent },

  // Localized routes (e.g. /es, /pt, /fr)
  { path: ':lang', component: MainContentComponent },
  { path: ':lang/privacy-policy', component: PrivacyPolicyComponent },
  { path: ':lang/contact', component: ContactComponent },
  { path: ':lang/article/:slug', component: SeoLandingComponent },

  { path: '**', redirectTo: '' }
];
