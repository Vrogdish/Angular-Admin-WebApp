import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navlink',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss'
})
export class NavlinkComponent{
  @Input({required : true})  link! : {
    title : string
    imageUrl : string
    path : string
  }
}
