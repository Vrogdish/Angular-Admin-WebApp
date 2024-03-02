import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/components/pages/products.component';
import { UsersComponent } from './modules/users/components/pages/users.component';
import { OrdersComponent } from './modules/orders/components/pages/orders.component';
import { CommentsComponent } from './modules/comments/components/pages/comments.component';
import { DashboardComponent } from './modules/dashboard/components/pages/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'comments', component: CommentsComponent },
];
