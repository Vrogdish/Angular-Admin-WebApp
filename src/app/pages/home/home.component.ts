import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TodaysMoneyComponent } from '../../widgets/todays-money/todays-money.component';
import { TodaysUsersComponent } from '../../widgets/todays-users/todays-users.component';
import { WelcomeComponent } from '../../widgets/welcome/welcome.component';
import { SatisfactionComponent } from '../../widgets/satisfaction/satisfaction.component';
import { TotalUsersComponent } from '../../widgets/total-users/total-users.component';
import { ProductListComponent } from '../../widgets/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    TodaysMoneyComponent,
    TodaysUsersComponent,
    WelcomeComponent,
    SatisfactionComponent,
    TotalUsersComponent,
    ProductListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
