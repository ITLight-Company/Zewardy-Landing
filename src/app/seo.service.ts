import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title, 
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateSeoTags(config: { title: string, description: string, keywords?: string, lang?: string, url?: string }) {
    // 1. Title
    this.titleService.setTitle(config.title);

    // 2. Meta description
    this.metaService.updateTag({ name: 'description', content: config.description });
    
    // 3. Meta keywords (if provided)
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }

    // 4. Update Open Graph tags for better sharing
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    if(config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    // 5. Update HTML lang attribute for Search Engines
    if (config.lang) {
      this.document.documentElement.lang = config.lang;
    }
  }

  setCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}

