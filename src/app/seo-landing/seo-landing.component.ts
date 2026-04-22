import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../seo.service';
import { Subscription } from 'rxjs';
import { SEO_CONTENT_DB } from './seo-db';

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './seo-landing.component.html',
  styleUrl: './seo-landing.component.scss'
})
export class SeoLandingComponent implements OnInit, OnDestroy {
  lang: string = 'en';
  slug: string = '';
  content: any = null;
  isMenuOpen: boolean = false;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private seoService: SeoService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || 'make-money-online-app';
      const routeLang = params.get('lang');
      
      this.lang = ['en', 'es', 'pt', 'fr'].includes(routeLang || '') ? routeLang! : 'en';

      this.translate.use(this.lang);
      this.loadSeoContent();
    });
  }

  loadSeoContent() {
    const fallback = SEO_CONTENT_DB['make-money-online-app'][this.lang];
    const data = SEO_CONTENT_DB[this.slug] ? (SEO_CONTENT_DB[this.slug][this.lang] || fallback) : fallback;
    
    this.content = data;

    this.seoService.updateSeoTags({
      title: data.title,
      description: data.desc,
      keywords: data.keyword + ', make money app, get paid to, zewardy, rewards',
      lang: this.lang,
      url: `https://zewardy.com/${this.lang === 'en' ? '' : this.lang + '/'}article/${this.slug}`
    });

    this.seoService.setCanonicalUrl(`https://zewardy.com/${this.lang === 'en' ? '' : this.lang + '/'}article/${this.slug}`);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnDestroy() {
    if(this.routeSub) this.routeSub.unsubscribe();
  }
}
