import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,SidebarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
