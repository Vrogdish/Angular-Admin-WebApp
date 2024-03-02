import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { TodaysMoneyComponent } from '../../../incomes/components/widgets/todays-money/todays-money.component';
import { TodaysUsersComponent } from '../../../users/components/widgets/todays-users/todays-users.component';
import { WelcomeComponent } from '../../../admin/components/widgets/welcome/welcome.component';
import { SatisfactionComponent } from '../../../comments/components/widgets/satisfaction/satisfaction.component';
import { TotalUsersComponent } from '../../../users/components/widgets/total-users/total-users.component';
import { ProductListComponent } from '../../../products/components/widgets/product-list/product-list.component';
import { TodaysOrdersComponent } from '../../../orders/components/widgets/todays-orders/todays-orders.component';
import { LastUsersComponent } from '../../../users/components/widgets/last-users/last-users.component';
import { OrdersListComponent } from '../../../orders/components/widgets/orders-list/orders-list.component';
import { LastCommentsComponent } from '../../../comments/components/widgets/last-comments/last-comments.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
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
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
