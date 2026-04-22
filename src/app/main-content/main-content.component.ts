import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../seo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
  isMenuOpen: boolean = false;
  private sub!: Subscription;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private seoService: SeoService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const urlLang = params.get('lang');
      const lang = ['en', 'es', 'pt', 'fr'].includes(urlLang || '') ? urlLang! : 'en';

      const localizedTitles: any = {
        'en': { title: 'Zewardy - Easy Rewards & Make Money App', desc: 'Get paid to play games, complete tasks, and earn real cash rewards globally.' },
        'es': { title: 'Zewardy - App de Recompensas y Ganar Dinero', desc: 'Gana dinero real jugando y completando tareas desde cualquier lugar del mundo.' },
        'pt': { title: 'Zewardy - Aplicativo de Recompensas e Dinheiro', desc: 'Receba pagamentos reais jogando e completando tarefas globalmente.' },
        'fr': { title: 'Zewardy - Application de Récompenses et Argent', desc: 'Gagnez de l\'argent réel en jouant et en complétant des tâches.' }
      };

      const seoData = localizedTitles[lang] || localizedTitles['en'];

      this.seoService.updateSeoTags({
        title: seoData.title,
        description: seoData.desc,
        keywords: 'zewardy, make money app, rewards, earn cash',
        lang: lang,
        url: `https://zewardy.com/${lang === 'en' ? '' : lang + '/'}`
      });

      this.seoService.setCanonicalUrl(`https://zewardy.com/${lang === 'en' ? '' : lang + '/'}`);
    });
  }

  ngOnDestroy() {
    if(this.sub) this.sub.unsubscribe();
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
}

