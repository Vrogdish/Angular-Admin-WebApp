import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { NavlinkComponent } from '../../components/navlink/navlink.component';
import { HelpComponent } from '../../components/help/help.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NavlinkComponent,CommonModule,HelpComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
links = [
  {
  title : "Dashboard",
  imageUrl : "../../../assets/icons/home.png",
  path : "/"
},
{
  title : "Products",
  imageUrl : "../../../assets/icons/product.png",
  path : "/products"
},
{
  title : "Users",
  imageUrl : "../../../assets/icons/group.png",
  path : "/users"
},
{
  title : "Orders",
  imageUrl : "../../../assets/icons/money.png",
  path : "/orders"
},
]


}
