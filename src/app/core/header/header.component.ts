import { Component } from '@angular/core';
import { SvgUserComponent } from '../../svg/svg-user/svg-user.component';
import { SvgConfigComponent } from '../../svg/svg-config/svg-config.component';
import { SvgAlertComponent } from '../../svg/svg-alert/svg-alert.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgUserComponent,
    SvgConfigComponent,
    SvgAlertComponent,
    BreadcrumbComponent,
    MenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
