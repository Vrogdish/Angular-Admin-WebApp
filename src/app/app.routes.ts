import { Routes } from '@angular/router';
import { ProductsComponent } from './modules/products/products.component';
import { UsersComponent } from './modules/users/users.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { CommentsComponent } from './modules/comments/comments.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path: "products", component : ProductsComponent},
    {path : "users", component : UsersComponent},
    {path : "orders", component : OrdersComponent},
    {path : "comments", component : CommentsComponent}
];
