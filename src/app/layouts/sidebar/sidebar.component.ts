import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { NavlinkComponent } from '../../components/navlink/navlink.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NavlinkComponent,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
links = [
  {
  title : "Dashboard",
  imageUrl : "../../../assets/icons/default.png",
  path : "/"
},
{
  title : "Products",
  imageUrl : "../../../assets/icons/default.png",
  path : "/products"
}
]


}
