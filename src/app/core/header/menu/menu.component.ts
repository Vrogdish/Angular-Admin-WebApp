import { Component } from '@angular/core';
import { SvgAlertComponent } from '../../../svg/svg-alert/svg-alert.component';
import { SvgConfigComponent } from '../../../svg/svg-config/svg-config.component';
import { SvgUserComponent } from '../../../svg/svg-user/svg-user.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SvgAlertComponent, SvgConfigComponent, SvgUserComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
