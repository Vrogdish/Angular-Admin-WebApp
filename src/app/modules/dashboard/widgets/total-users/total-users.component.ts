import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { SmallCardComponent } from '../../small-card/small-card.component';

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
