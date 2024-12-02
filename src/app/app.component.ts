import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent], // Dodaj FooterComponent do importów
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Popraw literówkę z "styleUrl" na "styleUrls"
})
export class AppComponent {
  title = 'zewardy-landing';
}
