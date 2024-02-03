import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TodaysMoneyComponent } from '../../widgets/todays-money/todays-money.component';
import { TodaysUsersComponent } from '../../widgets/todays-users/todays-users.component';
import { WelcomeComponent } from '../../widgets/welcome/welcome.component';
import { SatisfactionComponent } from '../../widgets/satisfaction/satisfaction.component';
import { TotalUsersComponent } from '../../widgets/total-users/total-users.component';
import { ProductListComponent } from '../../widgets/product-list/product-list.component';
import { TodaysOrdersComponent } from '../../widgets/todays-orders/todays-orders.component';
import { LastUsersComponent } from '../../widgets/last-users/last-users.component';
import { OrdersListComponent } from '../../widgets/orders-list/orders-list.component';
import { LastCommentsComponent } from '../../widgets/last-comments/last-comments.component';
import { RouterLink } from '@angular/router';

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
    ProductListComponent,
    TodaysOrdersComponent,
    LastUsersComponent,
    OrdersListComponent,
    LastCommentsComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
