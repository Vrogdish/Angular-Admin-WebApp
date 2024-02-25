
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { TodaysMoneyComponent } from '../../modules/dashboard/widgets/todays-money/todays-money.component';
import { TodaysUsersComponent } from '../../modules/dashboard/widgets/todays-users/todays-users.component';
import { WelcomeComponent } from '../../modules/dashboard/widgets/welcome/welcome.component';
import { SatisfactionComponent } from '../../modules/dashboard/widgets/satisfaction/satisfaction.component';
import { TotalUsersComponent } from '../../modules/dashboard/widgets/total-users/total-users.component';
import { ProductListComponent } from '../../modules/dashboard/widgets/product-list/product-list.component';
import { TodaysOrdersComponent } from '../../modules/dashboard/widgets/todays-orders/todays-orders.component';
import { LastUsersComponent } from '../../modules/dashboard/widgets/last-users/last-users.component';
import { OrdersListComponent } from '../../modules/dashboard/widgets/orders-list/orders-list.component';
import { LastCommentsComponent } from '../../modules/dashboard/widgets/last-comments/last-comments.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [    CardComponent,
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
    RouterLink,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
