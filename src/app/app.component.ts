import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Zewardy-Landing';
  cookiesAccepted = true;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language || navigator.languages[0];
      const langMatch = browserLang.match(/fr|es|pt|en/);
      const lang = langMatch ? langMatch[0] : 'en';
      translate.setDefaultLang('en');
      translate.use(lang);
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('zewardy_cookie_consent');
      if (!consent) {
        this.cookiesAccepted = false;
      }
    }
  }

  acceptCookies() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('zewardy_cookie_consent', 'true');
      
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      function gtag(...args: any[]){ win.dataLayer.push(args); }
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      
      this.cookiesAccepted = true;
    }
  }
}
