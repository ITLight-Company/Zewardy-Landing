import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  phone_mockup = 'assets/zewardy_app.png';
  m_phone_mockup = 'assets/m_zewardy_app.png';
  isMenuOpen: boolean = false;

  constructor(public router: Router) {}

  isActive(link: string): boolean {
    return this.router.url === link;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
