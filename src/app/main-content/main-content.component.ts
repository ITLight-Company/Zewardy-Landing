import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
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
