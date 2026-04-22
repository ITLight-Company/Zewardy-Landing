import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Zewardy-Landing';
  cookiesAccepted = true;
  private routerSub!: Subscription;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('zewardy_cookie_consent');
      if (!consent) {
        this.cookiesAccepted = false;
      }
    }

    // Dynamic language routing from URL params instead of navigator
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let firstChild = this.route.root.firstChild;
        let lang = 'en'; // default
        
        while (firstChild) {
          if (firstChild.snapshot.paramMap.has('lang')) {
            const urlLang = firstChild.snapshot.paramMap.get('lang');
            if (['en', 'es', 'pt', 'fr'].includes(urlLang || '')) {
              lang = urlLang!;
            }
          }
          firstChild = firstChild.firstChild;
        }

        this.translate.use(lang);
      });
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

  ngOnDestroy() {
    if(this.routerSub) this.routerSub.unsubscribe();
  }
}

