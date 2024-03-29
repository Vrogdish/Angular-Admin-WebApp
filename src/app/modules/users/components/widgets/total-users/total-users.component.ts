import { Component } from '@angular/core';
import { SmallCardComponent } from '../../../../../shared/components/small-card/small-card.component';

@Component({
  selector: 'app-total-users',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './total-users.component.html',
  styleUrl: './total-users.component.scss',
})
export class TotalUsersComponent {
  content = {
    title: 'Total Users',
    imageUrl: '../../../assets/icons/users.png',
    path: '',
  };
  data = { amount: '2500', balance: '+20%' };
}
