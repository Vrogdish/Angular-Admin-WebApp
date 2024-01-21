import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  pathName : string = "Dashboard";
  
}
