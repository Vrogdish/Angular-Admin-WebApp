import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FooterComponent } from './core/footer/footer.component';
import { BurgerMenuComponent } from './core/header/burger-menu/burger-menu.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,SidebarComponent,FooterComponent,BurgerMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
