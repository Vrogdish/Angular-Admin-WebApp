import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: "products", component : ProductsComponent},
    {path : "users", component : UsersComponent},
    {path : "orders", component : OrdersComponent},
    {path : "comments", component : CommentsComponent}
];
